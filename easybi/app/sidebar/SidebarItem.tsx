import {
    SidebarMenuItem,
    SidebarMenuButton,
} from "@/components/ui/sidebar";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { ReactNode } from "react";

export interface NavItem {
  title: string;
  href: string;
  icon: ReactNode;
}

interface SidebarItemProps {
  navInfo: NavItem;
}

export default function SidebarItem({ navInfo }: SidebarItemProps) {
    return (
        <SidebarMenuItem>
            <Tooltip>
                <TooltipTrigger asChild>
                    <SidebarMenuButton asChild className="justify-center px-0 py-3">
                        <Link href={navInfo.href}>
                            {navInfo.icon}
                        </Link>
                    </SidebarMenuButton>
                </TooltipTrigger>
                <TooltipContent side="right">
                    <p>{navInfo.title}</p>
                </TooltipContent>
            </Tooltip>
        </SidebarMenuItem>
    )
}
