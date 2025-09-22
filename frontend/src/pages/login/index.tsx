import Login from "@/components/form/Login.tsx";


export default function LoginPage(){
    return (
        <div className="flex h-screen w-full items-center justify-center">
            <div className="flex-[2] h-full">
                <Login/>
            </div>
            <div className="flex-[2] bg-amber-200 h-full relative">
                <img
                    src="https://images.unsplash.com/photo-1755867712205-c716ff78e399?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D"
                    alt="img_login"
                    className=" object-cover w-full h-full"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/50 backdrop:blur-sm text-center p-8 mx-auto w-full max-w-11/12">
                    <h1 className="text-2xl font-extrabold text-white mb-4">BIENVENUE SUR COMPUS CONNECT</h1>
                    <p className="text-lg text-white">
                        Veuillez vous authentifier pour accéder à votre tableau de bord
                    </p>
                </div>
            </div>
        </div>
    )
}