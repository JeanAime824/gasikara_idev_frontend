// Dashboard.tsx
import MainDashboard from "@/components/section/MainDashboard";
import {SidebarProvider, SidebarTrigger, useSidebar} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/navigation/app-sidebar";
import { Button } from "@/components/ui/button";
import { Menu, Bell, Search, Settings, UserRound } from "lucide-react";
import InputComponent from "@/components/InputComponent.tsx";

export default function Dashboard() {
    return (
        <SidebarProvider>
            <DashboardContent />
        </SidebarProvider>
    );
}

function DashboardContent() {
    const { isExpanded, isHovered, isMobileOpen } = useSidebar();

    const mainContentMargin = isMobileOpen
        ? "ml-0"
        : isExpanded || isHovered
            ? "lg:ml-[290px]"
            : "lg:ml-[90px]";

    return (
        <div className="min-h-screen flex w-full bg-gray-50 dark:bg-gray-900">
            {/* Sidebar */}
            <AppSidebar />

            {/* Main content */}
            <div
                className={`flex-1 transition-all duration-300 ease-in-out ${mainContentMargin} flex flex-col`}
            >
                {/* Header */}
                <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
                    <div className="px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16">
                            {/* Left section */}
                            <div className="flex items-center space-x-4">
                                <SidebarTrigger className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"/>
                                <div className="hidden sm:block">
                                    <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
                                        Tableau de bord
                                    </h1>
                                </div>
                            </div>

                            {/* Center section - Search */}
                            <div className="flex-1 max-w-lg mx-4">
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                                    <InputComponent 
                                        placeholder="Rechercher des étudiants, cours, événements..." 
                                        type="search"
                                        className="pl-10 w-full"
                                    />
                                </div>
                            </div>

                            {/* Right section */}
                            <div className="flex items-center space-x-3">
                                <Button variant="ghost" size="sm" className="relative p-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <Bell className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                        3
                                    </span>
                                </Button>
                                <Button variant="ghost" size="sm" className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <UserRound/>
                                </Button>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Main dashboard */}
                <main className="flex-1 pt-2 sm:pt-3 lg:pt-4 px-3 sm:px-4 lg:px-6 pb-3 sm:pb-4 lg:pb-6 overflow-auto">
                    <div className="max-w-7xl mx-auto">
                        <MainDashboard />
                    </div>
                </main>
            </div>
        </div>
    );
}
