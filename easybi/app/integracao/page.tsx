import Header from "../header/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search } from "lucide-react";
import Link from "next/link";

export default function Integracao() {
    const integracaoCount = Array(20).fill({});

    return (
        <>
            <Header
                title="Minhas Integrações"
                action={<NovaIntegracaoBtn />}
            />
            <main className="flex-1 p-4 space-y-4">
                {/* Barra de pesquisa com ícone */}
                <div className="flex justify-end gap-2">
                    <div className="relative">
                        <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                            placeholder="Pesquisar integrações..."
                            className="pl-8 max-w-sm"
                        />
                    </div>
                </div>

                {/* Lista de integrações */}
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {
                        integracaoCount.map((count, index) => {
                            return <IntegracaoCard key={`integracao-card-${index}`}/>
                        })
                    }
                </div>
            </main>
        </>
    );
}

function NovaIntegracaoBtn() {
    return (
        <Link href="/integracao/criar-integracao">
            <Button
                className="hover:cursor-pointer"
                size="sm"
            >
                <Plus className="h-4 w-4 mr-2" />
                Nova Integração
            </Button>
        </Link>
    );
}

function IntegracaoCard() {
    return (
        <div className="border rounded-lg p-4 shadow-sm">
            <h3 className="font-medium">Integração Exemplo</h3>
            <p className="text-sm text-muted-foreground">Detalhes da integração...</p>
        </div>
    )
}

