import Header from "../../header/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Upload } from "lucide-react";
import Link from "next/link";


export default function CriarIntegracao() {
    return (
        <>
            <Header title="Criar Integração" />
            <main className="container max-w-3xl p-4 mx-auto">
                <Card>
                    <CardHeader>
                        <CardTitle>Nova Integração</CardTitle>
                    </CardHeader>
                    <CriarIntegracaoContent />
                </Card>
            </main>
        </>
    );
}


function CriarIntegracaoContent() {
    const inputInfo = [
        {
            label: "Nome da Integração", placeholder: "Ex: Salesforce"
        },
        {
            label: "Telefone", placeholder: "(00) 00000-0000"
        },
        {
            label: "CNPJ", placeholder: "00.000.000/0000-00"
        },
        {
            label: "E-mail", placeholder: "contato@exemplo.com"
        },
    ]

    const btnInfo = [
        {
            name: "Cancelar", variant: "outline",
        },
        {
            name: "Criar Integração", variant: "submit",
        },
    ]

    return (
        <CardContent className="space-y-6">
            <CriarIntegracaoLogo />
            <CriarIntegracaoInput info={inputInfo[0]}/>
            <CriarIntegracaoInput info={inputInfo[1]} />
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <CriarIntegracaoInput info={inputInfo[2]}/>
                <CriarIntegracaoInput info={inputInfo[3]} />
            </div>
            <div className="flex justify-end gap-2 pt-4">
                <Link href="/integracao">
                    <CriarIntegracaoBtnDeAcao info={btnInfo[0]}/>
                </Link>
                <CriarIntegracaoBtnDeAcao info={btnInfo[1]}/>
            </div>
        </CardContent>
    )
}

function CriarIntegracaoBtnDeAcao({ info }) {
    return (
        <Button 
            variant={info.variant}
            className="hover:cursor-pointer"
        >
            { info.name }
        </Button>
    )
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
    )
}

function CriarIntegracaoInput({ info }) {
    return (
        <div className="space-y-2">
            <Label >{info.label}</Label>
            <Input id={info.label.toLower} placeholder={info.placeholder} />
        </div>
    )
}
