import { SidebarTrigger } from "@/components/ui/sidebar";
import { ThemeToggle } from "../theme/theme-toggle";
import { ReactNode } from "react";

interface HeaderProps {
    title?: string;       // Título opcional da página
    action?: ReactNode;   // Elemento de ação (ex: botão) posicionado à direita
}

export default function Header({ title, action }: HeaderProps) {
    return (
        <header
            className="flex h-16 items-center border-b px-4 gap-2"
        >
            <SidebarTrigger className="md:hidden" />
            <h1 className="text-lg font-semibold">{title}</h1>
            <div className="ml-auto flex items-center gap-2">
                {action}
                <ThemeToggle />
            </div>
        </header>
    );
}
