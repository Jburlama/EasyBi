"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "../../header/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Upload } from "lucide-react";
import Link from "next/link";

interface InputInfo {
    label: string;
    placeholder: string;
}

interface BtnInfo {
    name: string;
    variant: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
}

export default function CriarIntegracao() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        cnpj: "",
        email: "",
        logo: "",
    });
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch("/api/integrations", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            if (res.ok) {
                router.push("/integracao"); // redirect after success
            } else {
                // handle error
                console.error("Failed to create");
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    // Update state when inputs change
    const handleChange = (field: string, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    return (
        <>
            <Header title="Criar Integração" />
            <main className="container max-w-3xl p-4 mx-auto">
                <Card>
                    <CardHeader>
                        <CardTitle>Nova Integração</CardTitle>
                    </CardHeader>
                    <form onSubmit={handleSubmit}>
                        <CriarIntegracaoContent 
                            formData={formData} 
                            onChange={handleChange} 
                        />
                    </form>
                </Card>
            </main>
        </>
    );
}

function CriarIntegracaoContent() {
    const inputInfo: InputInfo[] = [
        { label: "Nome da Integração", placeholder: "Ex: Salesforce" },
        { label: "Telefone", placeholder: "(00) 00000-0000" },
        { label: "CNPJ", placeholder: "00.000.000/0000-00" },
        { label: "E-mail", placeholder: "contato@exemplo.com" },
    ];

    const btnInfo: BtnInfo[] = [
        { name: "Cancelar", variant: "outline" },
        { name: "Criar Integração", variant: "default" },
    ];

    return (
        <CardContent className="space-y-6">
            <CriarIntegracaoLogo />
            <CriarIntegracaoInput info={inputInfo[0]} />
            <CriarIntegracaoInput info={inputInfo[1]} />
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <CriarIntegracaoInput info={inputInfo[2]} />
                <CriarIntegracaoInput info={inputInfo[3]} />
            </div>
            <div className="flex justify-end gap-2 pt-4">
                <Link href="/integracao">
                    <CriarIntegracaoBtnDeAcao info={btnInfo[0]} />
                </Link>
                <CriarIntegracaoBtnDeAcao info={btnInfo[1]} />
            </div>
        </CardContent>
    );
}

function CriarIntegracaoBtnDeAcao({ info }: { info: BtnInfo }) {
    return (
        <Button variant={info.variant} className="hover:cursor-pointer">
            {info.name}
        </Button>
    );
}

function CriarIntegracaoInput({ info }: { info: InputInfo }) {
    const id = info.label.toLowerCase().replace(/\s+/g, "-");

    return (
        <div className="space-y-2">
            <Label htmlFor={id}>{info.label}</Label>
            <Input id={id} placeholder={info.placeholder} />
        </div>
    );
}

function CriarIntegracaoLogo() {
    return (
        <div className="space-y-2">
            <Label>Logo da Integração</Label>
            <div className="flex items-center gap-4">
                <Avatar className="w-16 h-16 border">
                    <AvatarFallback>Logo</AvatarFallback>
                </Avatar>
                <Button
                    variant="outline"
                    size="sm"
                    className="hover:cursor-pointer"
                >
                    <Upload className="w-4 h-4 mr-2" />
                    Upload imagem
                </Button>
            </div>
        </div>
    );
}

