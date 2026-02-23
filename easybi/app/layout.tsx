import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {
    SidebarProvider, 
    SidebarInset
} from "@/components/ui/sidebar"
import { AppSidebar } from "@/app/sidebar/app-sidebar"
import { ThemeProvider } from "./providers/theme-provider";
import { ThemeToggle } from './theme/theme-toggle'; 
import Header from "./header/Header";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "EasyBi",
    description: "EasyBi",
};

export default function RootLayout({
    children,
}: Readonly<{
        children: React.ReactNode;
    }>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <ThemeProvider>
                    <SidebarProvider
                        style={{
                            '--sidebar-width': '100px',
                        } as React.CSSProperties}
                    >
                        <AppSidebar />
                        <SidebarInset>
                            <Header />
                            <main className="flex-1 p-4">
                                {children}
                            </main>
                        </SidebarInset>
                    </SidebarProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
