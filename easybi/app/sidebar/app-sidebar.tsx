import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
} from "@/components/ui/sidebar";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { Plug, Users, RefreshCw, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import EasyBiLogo from "./EasyBi-logo";

export function AppSidebar() {
    return (
        <TooltipProvider delayDuration={0}>
            <Sidebar>
                <SidebarHeader className="pb-5 mt-3 ml-2">
                    <EasyBiLogo />
                </SidebarHeader>

                <SidebarContent className="pt-2">
                    <SidebarMenu className="gap-3">
                        <SidebarMenuItem>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <SidebarMenuButton asChild className="justify-center px-0 py-3">
                                        <Link href="/integracao">
                                            <Plug className="h-5 w-5" />
                                        </Link>
                                    </SidebarMenuButton>
                                </TooltipTrigger>
                                <TooltipContent side="right">
                                    <p>Integração</p>
                                </TooltipContent>
                            </Tooltip>
                        </SidebarMenuItem>

                        <SidebarMenuItem>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <SidebarMenuButton asChild className="justify-center px-0 py-3">
                                        <Link href="/usuarios">
                                            <Users className="h-5 w-5" />
                                        </Link>
                                    </SidebarMenuButton>
                                </TooltipTrigger>
                                <TooltipContent side="right">
                                    <p>Usuário e permissões</p>
                                </TooltipContent>
                            </Tooltip>
                        </SidebarMenuItem>

                        <SidebarMenuItem>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <SidebarMenuButton asChild className="justify-center px-0 py-3">
                                        <Link href="/sincronizacoes">
                                            <RefreshCw className="h-5 w-5" />
                                        </Link>
                                    </SidebarMenuButton>
                                </TooltipTrigger>
                                <TooltipContent side="right">
                                    <p>Sincronizações</p>
                                </TooltipContent>
                            </Tooltip>
                        </SidebarMenuItem>

                        <SidebarMenuItem>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <SidebarMenuButton asChild className="justify-center px-0 py-3">
                                        <Link href="/dashboards">
                                            <LayoutDashboard className="h-5 w-5" />
                                        </Link>
                                    </SidebarMenuButton>
                                </TooltipTrigger>
                                <TooltipContent side="right">
                                    <p>Dashboards</p>
                                </TooltipContent>
                            </Tooltip>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarContent>

                <SidebarFooter />
            </Sidebar>
        </TooltipProvider>
    );
}
