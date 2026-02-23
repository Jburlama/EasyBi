import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
    TooltipProvider,
} from "@/components/ui/tooltip";
import {
    Plug,
    Users,
    RefreshCw,
    LayoutDashboard
} from "lucide-react";
import EasyBiLogo from "./EasyBi-logo";
import SidebarItem from "./SidebarItem";

export function AppSidebar() {
    const navInfo = [
        {
            title: "Integrações",
            href: "/integracao",
            icon: <Plug className="h-5 w-5" />
        },
        {
            title: "Usuário e permissões",
            href: "/usuarios",
            icon: <Users className="h-5 w-5" />
        },
        {
            title: "Sincronizações",
            href: "/sincronizacoes",
            icon: <RefreshCw className="h-5 w-5" />
        },
        {
            title: "Fashboards",
            href: "/dashboards",
            icon: <LayoutDashboard className="h-5 w-5" />
        },
    ]


    return (
        <TooltipProvider delayDuration={0}>
            <Sidebar>
                <SidebarHeader className="pb-5 mt-3 ml-2">
                    <EasyBiLogo />
                </SidebarHeader>
                <SidebarContent className="pt-2">
                    <SidebarMenu className="gap-3">
                        {
                            navInfo.map((data) => {
                                return (
                                    <SidebarItem navInfo={data}/>
                                )
                            })
                        }
                    </SidebarMenu>
                </SidebarContent>
                <SidebarFooter />
            </Sidebar>
        </TooltipProvider>
    );
}
