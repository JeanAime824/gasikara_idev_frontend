import {createContext, type ReactNode, useContext, useEffect, useState} from "react";
import type {User} from "@/types/data.ts";
import axios from "axios";

interface UserContextType{
    user: User | null;
    onLogin: (credentials: {username: string, password: string}) => Promise<void>;
    onRegister: (newUser: { username: string, password: string }) => Promise<void>;
    onLogout: () => void;
    authState?: {token: string | null, authenticated: boolean | null}
}

const AuthContext = createContext<UserContextType | undefined>(undefined)


/** URL backend django **/
const API_URL = "http://localhost:8000/"


export const AuthProvider = ({children}: {children: ReactNode}) => {

    const [authState, setAuthState] = useState<{token: string | null, authenticated: boolean | null}>({token: null, authenticated: false})
    const [user, setUser] = useState<User | null>(null)


    /** Vérifier l'état de la connexion au chargement si un token est déjà enregistré **/
    useEffect(() => {
        const token =localStorage.getItem('token')
        if(token){
            setAuthState({token: token, authenticated: true})
        }else{
            setAuthState({token: null, authenticated: false})
        }
    }, []);

    /** Fonction pour se connecter **/
    async function login(credentials: {username: string; password: string}) {
        try{
            const result = await axios.post(`${API_URL}/login`, credentials)
            setAuthState({token: result.data.token, authenticated: true})
            setUser(result.data.user)
            localStorage.setItem("token", result.data.token)
            document.cookie = `token=${result.data.token}; path=/`
            axios.defaults.headers.common['Authorization'] = `Bearer ${result.data.token}`
        }catch (error){
            console.log(error)
        }
    }

    /** Fonction pour d'inscription **/
    async function register(newUser: { username: string, password: string}){
        try{
            const result = await axios.post(`${API_URL}/register`, newUser)
            setAuthState({token: result.data.token, authenticated: true})
            setUser(result.data.user)
            localStorage.setItem("token", result.data.token)
            document.cookie = `token=${result.data.token}; path=/`
            axios.defaults.headers.common['Authorization'] = `Bearer ${result.data.token}`
        }catch (error){
            console.log(error)
        }
    }

    /** Fonction pour se déconnecter **/
    async function logout() {
        try{
            const result = await axios.post(`${API_URL}/logout`, user)
            console.log(result.data.message)
            setAuthState({token: null, authenticated: false})
        }catch (error){

            console.log(error)
        }
    }

    const values = {
        user,
        onLogin: login,
        onRegister: register,
        onLogout: logout,
        authState
    }

    return(
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}


/** hook pour utiliser les fonction d'authentification **/
export const UseAuth = () => {
    const context = useContext(AuthContext)
    if(!context) throw new Error("useAuth must be used within an AuthProvider")
    return context
}