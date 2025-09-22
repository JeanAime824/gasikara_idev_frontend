import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import InputComponent from "@/components/InputComponent";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, UserRound } from "lucide-react";

export default function ProfilePage(){
    return(
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            {/* Header */}
            <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Profil</h1>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Gérez vos informations personnelles et de sécurité</p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Left: Summary */}
                    <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6">
                        <div className="flex items-center gap-4">
                            <div className="h-16 w-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-semibold">
                                <UserRound className="w-8 h-8" />
                            </div>
                            <div>
                                <div className="text-lg font-semibold text-gray-900 dark:text-white">Utilisateur</div>
                                <div className="text-sm text-gray-500 dark:text-gray-400">Rôle: Membre</div>
                            </div>
                        </div>
                        <div className="mt-6 space-y-3 text-sm">
                            <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300"><Mail className="w-4 h-4" /> email@example.com</div>
                            <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300"><Phone className="w-4 h-4" /> +261 34 00 000 00</div>
                            <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300"><MapPin className="w-4 h-4" /> Antananarivo, MG</div>
                        </div>
                        <Separator className="my-6" />
                        <div className="grid grid-cols-3 gap-3 text-center">
                            <div>
                                <div className="text-xl font-semibold text-gray-900 dark:text-white">24</div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">Cours</div>
                            </div>
                            <div>
                                <div className="text-xl font-semibold text-gray-900 dark:text-white">1,247</div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">Etudiants</div>
                            </div>
                            <div>
                                <div className="text-xl font-semibold text-gray-900 dark:text-white">94%</div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">Réussite</div>
                            </div>
                        </div>

                    </Card>

                    {/* Right: Forms */}
                    <Card className="lg:col-span-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6">
                        <div>
                            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Informations personnelles</h2>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Mettez à jour vos informations</p>
                        </div>
                        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Prénom</label>
                                <InputComponent placeholder="Votre prénom" type="text" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nom</label>
                                <InputComponent placeholder="Votre nom" type="text" />
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                                <InputComponent type="email" placeholder="email@example.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Téléphone</label>
                                <InputComponent placeholder="Votre numéro" type="text" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Ville</label>
                                <InputComponent placeholder="Votre ville" type="text" />
                            </div>
                        </div>
                        <div className="mt-6">
                            <Button>Enregistrer</Button>
                        </div>

                        <Separator className="my-8" />

                        <div>
                            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Sécurité</h2>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Mettez à jour votre mot de passe</p>
                        </div>
                        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Mot de passe actuel</label>
                                <InputComponent type="password" placeholder="••••••••" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nouveau mot de passe</label>
                                <InputComponent type="password" placeholder="••••••••" />
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Confirmer le mot de passe</label>
                                <InputComponent type="password" placeholder="••••••••" />
                            </div>
                        </div>
                        <div className="mt-6">
                            <Button>Mettre à jour le mot de passe</Button>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}