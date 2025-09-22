import { Link, useLocation } from "react-router-dom"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { sidebarItems } from "@/components/navigation/sidebar-items"

export function AppSidebar() {
    const location = useLocation()

    const isActive = (url: string) => location.pathname === url

    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>
                        <span className="text-2xl font-bold">LOGO</span>
                    </SidebarGroupLabel>
                </SidebarGroup>

                {sidebarItems.map((group) => (
                    <SidebarGroup key={group.id}>
                        {group.label && (
                            <SidebarGroupLabel>{group.label}</SidebarGroupLabel>
                        )}
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {group.items.map((item) => (
                                    <SidebarMenuItem key={item.title}>
                                        {item.subItems ? (
                                            <>
                                                <SidebarMenuButton className="h-10" isActive={isActive(item.url)}>
                                                    {item.icon && <item.icon />}
                                                    <span>{item.title}</span>
                                                </SidebarMenuButton>
                                                <SidebarMenuSub>
                                                    {item.subItems.map((sub) => (
                                                        <SidebarMenuSubItem key={sub.title}>
                                                            <SidebarMenuSubButton asChild isActive={isActive(sub.url)}>
                                                                <Link to={sub.url}>
                                                                    {sub.icon && <sub.icon />}
                                                                    <span>{sub.title}</span>
                                                                </Link>
                                                            </SidebarMenuSubButton>
                                                        </SidebarMenuSubItem>
                                                    ))}
                                                </SidebarMenuSub>
                                            </>
                                        ) : (
                                            <SidebarMenuButton className="h-10" asChild isActive={isActive(item.url)}>
                                                <Link to={item.url}>
                                                    {item.icon && <item.icon />}
                                                    <span>{item.title}</span>
                                                </Link>
                                            </SidebarMenuButton>
                                        )}
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                ))}
            </SidebarContent>
        </Sidebar>
    )
}