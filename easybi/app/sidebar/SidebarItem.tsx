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

export default function SidebarItem({ navInfo }) {
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
