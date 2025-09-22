import CardForm from "@/components/CardForm/CardForm.tsx";
import {UserRound, UsersRound, GraduationCap, BookOpen, TrendingUp, Calendar, Award, Clock} from "lucide-react";
import {ChartComponent} from "@/components/chart/ChartComponent.tsx";
import "./Dashboard.css";

const MainDashboard = () => {
    const stats = [
        {
            title: "Total Étudiants",
            value: "1,247",
            change: "+12%",
            changeType: "positive",
            icon: UsersRound,
            color: "bg-blue-500",
            bgColor: "bg-blue-50 dark:bg-blue-900/20",
            textColor: "text-blue-600 dark:text-blue-400"
        },
        {
            title: "Total Enseignants",
            value: "52",
            change: "+3%",
            changeType: "positive",
            icon: GraduationCap,
            color: "bg-blue-500",
            bgColor: "bg-green-50 dark:bg-green-900/20",
            textColor: "text-green-600 dark:text-green-400"
        },
        {
            title: "Cours Actifs",
            value: "28",
            change: "+5%",
            changeType: "positive",
            icon: BookOpen,
            color: "bg-blue-500",
            bgColor: "bg-purple-50 dark:bg-purple-900/20",
            textColor: "text-purple-600 dark:text-purple-400"
        },
        {
            title: "Taux de Réussite",
            value: "94.2%",
            change: "+2.1%",
            changeType: "positive",
            icon: Award,
            color: "bg-blue-500",
            bgColor: "bg-orange-50 dark:bg-orange-900/20",
            textColor: "text-orange-600 dark:text-orange-400"
        }
    ];

    const recentActivities = [
        { id: 1, title: "Nouvelle inscription - Marie Dubois", time: "Il y a 2 heures", type: "student" },
        { id: 2, title: "Cours de Mathématiques ajouté", time: "Il y a 4 heures", type: "course" },
        { id: 3, title: "Examen de Physique programmé", time: "Il y a 6 heures", type: "exam" },
        { id: 4, title: "Rapport mensuel généré", time: "Il y a 1 jour", type: "report" }
    ];

    return(
        <div className="fade-in-stagger space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => {
                    const IconComponent = stat.icon;
                    return (
                        <CardForm 
                            key={index}
                            className={` border-0 shadow-sm stats-card p-5 md:p-6`}
                            title={stat.title}
                        >
                            <div className="flex items-center">
                                <div className={`p-3 rounded-lg ${stat.color} text-white icon-bounce mr-4`}>
                                    <IconComponent className="w-6 h-6" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-3xl font-bold leading-tight text-gray-900 dark:text-white">{stat.value}</p>
                                    <div className="flex items-center gap-2 mt-1">
                                        <TrendingUp className={`w-4 h-4 ${stat.textColor}`} />
                                        <span className={`text-sm font-medium ${stat.textColor}`}>{stat.change}</span>
                                        <span className="text-sm text-gray-500 dark:text-gray-400">vs mois dernier</span>
                                    </div>
                                </div>
                            </div>
                        </CardForm>
                    );
                })}
            </div>

            {/* Charts and Activities Row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Chart Section */}
                <div className="lg:col-span-2">
                    <CardForm 
                        className="bg-white dark:bg-gray-800 border-0 shadow-sm p-5 md:p-6"
                        title="Tendances d'inscription"
                    >
                        <div className="h-80 w-full">
                            <ChartComponent />
                        </div>
                    </CardForm>
                </div>

                {/* Recent Activities */}
                <div className="lg:col-span-1">
                    <CardForm 
                        className="bg-white dark:bg-gray-800 border-0 shadow-sm h-full p-5 md:p-6"
                        title="Activités récentes"
                    >
                        <div className="divide-y divide-gray-200 dark:divide-gray-700">
                            {recentActivities.map((activity) => (
                                <div key={activity.id} className="flex items-start gap-3 py-3 first:pt-0 last:pb-0">
                                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                                        <Clock className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-gray-900 dark:text-white truncate">{activity.title}</p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">{activity.time}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                            <button className="w-full text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium">
                                Voir toutes les activités
                            </button>
                        </div>
                    </CardForm>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            </div>
        </div>
    )
}

export default MainDashboard