import { defineConfig } from 'prisma/config';
import * as dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

export default defineConfig({
    datasource: {
        url: process.env.DATABASE_URL as string,
    },
    schema: './prisma/schema.prisma',
});
