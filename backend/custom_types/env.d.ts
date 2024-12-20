namespace NodeJS{
    interface ProcessEnv {
        AIVEN_USER: string;
        AIVEN_PASSWORD: string;
        AIVEN_HOST: string;
        AIVEN_PORT: number;
        AIVEN_DATABASE: string;
        AIVEN_CA: string;
        DATABASE_URL: string;
        JWT_SECRET: string;
    }
}