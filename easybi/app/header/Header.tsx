import {
    SidebarTrigger,
} from "@/components/ui/sidebar"
import { ThemeToggle } from '../theme/theme-toggle'; 

export default function Header() {
    return (
        <header className="flex h-16 items-center border-b px-4">
            <SidebarTrigger className="md:hidden"/>
            <div className="ml-auto">
                <ThemeToggle />
            </div>
        </header>
    )
}

