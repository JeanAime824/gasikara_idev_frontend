import {createContext, type ReactNode, useContext, useEffect, useState} from "react";
import type {User} from "@/types/data.ts";
import axios from "axios";

interface UserContextType{
    user: User | null;
    onLogin: (credentials: {username: string, password: string}) => Promise<{ ok: boolean; message?: string }>;
    onRegister: (newUser: { username: string, password: string }) => Promise<void>;
    onLogout: () => void;
    authState?: {token: string | null, authenticated: boolean | null}
    hasRole: (role: "ADMIN" | "MANAGER") => boolean;
    selectedRole: "ADMIN" | "MANAGER" | null;
    setSelectedRole: (role: "ADMIN" | "MANAGER" | null) => void;
}

const AuthContext = createContext<UserContextType | undefined>(undefined)


/** URL backend django **/
const API_URL = "http://127.0.0.1:8000/"


export const AuthProvider = ({children}: {children: ReactNode}) => {

    const [authState, setAuthState] = useState<{token: string | null, authenticated: boolean | null}>({token: null, authenticated: false})
    const [user, setUser] = useState<User | null>(null)
    const [selectedRole, setSelectedRole] = useState<"ADMIN" | "MANAGER" | null>(null)


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
    async function login(credentials: { username: string; password: string }) {
        try {
            const { data } = await axios.post(`${API_URL}/auth/login`, credentials);

            setAuthState({ token: data.token, authenticated: true });
            setUser(data.user);

            localStorage.setItem("token", data.token);
            localStorage.setItem("user", JSON.stringify(data.user));
            document.cookie = `token=${data.token}; path=/`;
            axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;

            return { ok: true };
        } catch (err: any) {
            setAuthState({ token: null, authenticated: false });

            localStorage.removeItem("token");
            localStorage.removeItem("user");
            delete axios.defaults.headers.common["Authorization"];
            document.cookie = "token=; Max-Age=0; path=/";

            const message = err?.response?.data?.error
            return { ok: false, message };
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

    function hasRole(role: "ADMIN" | "MANAGER"){
        return user?.role === role
    }

    const values = {
        user,
        onLogin: login,
        onRegister: register,
        onLogout: logout,
        hasRole,
        authState,
        selectedRole,
        setSelectedRole
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