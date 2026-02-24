import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, phone, cnpj, email, logo } = body;

        // Basic validation
        if (!name || !phone || !cnpj || !email) {
            return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
        }

        const integration = await prisma.integration.create({
            data: {
                name,
                phone,
                cnpj,
                email,
                logo: logo || null,
            },
        });

        return NextResponse.json(integration, { status: 201 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Internal error' }, { status: 500 });
    }
}
