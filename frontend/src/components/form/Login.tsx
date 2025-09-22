import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import InputComponent from "@/components/InputComponent.tsx";
import {KeyRound, UserRound} from "lucide-react";
import {UseAuth} from "@/context/AuthContext.tsx";
import {useNavigate} from "react-router-dom";



const formSchema = z.object({
    username: z.string().max(50),
    password: z.string().min(6, {message: "Password is too short"})
})

export default function Login() {

    const {onLogin} = UseAuth()
    const navigate = useNavigate()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            password: ""
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        await onLogin({
            username: values.username,
            password: values.password
        })
        navigate("/dashboard")
    }

    return(
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 h-full flex flex-col items-center justify-center rounded-xl">
                <h1 className="text-2xl font-bold text-black">Login Page</h1>
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <InputComponent className="w-96" title="Username" placeholder="Enter your username" type="text" {...field}>
                                    <UserRound className="w-4 h-4" />
                                </InputComponent>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <InputComponent className="w-96" title="Password" placeholder="****" type="password" {...field}>
                                    <KeyRound className="w-4 h-4"/>
                                </InputComponent>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Se connecter</Button>
            </form>
        </Form>
    )
}