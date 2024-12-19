import path from "path"
import dotenv from "dotenv";

dotenv.config({path: path.resolve(__dirname, "../.env")});

interface ENV {
    AIVEN_USER: string | undefined;
    AIVEN_PASSWORD: string | undefined;
    AIVEN_HOST: string | undefined;
    AIVEN_PORT: number | undefined;
    AIVEN_DATABASE: string | undefined;
    AIVEN_CA: string | undefined;
    DATABASE_URL: string | undefined;
    JWT_SECRET: string | undefined;
}

interface Config{
    AIVEN_USER: string;
    AIVEN_PASSWORD: string;
    AIVEN_HOST: string;
    AIVEN_PORT: number;
    AIVEN_DATABASE: string;
    AIVEN_CA: string;
    DATABASE_URL: string;
    JWT_SECRET: string;
}

const getConfig = ():ENV => {
    return {
        AIVEN_USER: process.env.AIVEN_USER,
        AIVEN_PASSWORD: process.env.AIVEN_PASSWORD,
        AIVEN_HOST: process.env.AIVEN_HOST,
        AIVEN_PORT: process.env.AIVEN_PORT ? Number(process.env.AIVEN_PORT) : undefined,
        AIVEN_DATABASE: process.env.AIVEN_DATABASE,
        AIVEN_CA: process.env.AIVEN_CA,
        DATABASE_URL: process.env.DATABASE_URL,
        JWT_SECRET: process.env.JWT_SECRET,
    };
}

const getProcessedConfig = (config: ENV):Config => {
    for (const [key, value] of Object.entries(config)){
        if(value === undefined){
            throw new Error(`Missing key ${key} in config.env`);
        }
    }
    return config as Config;
}

const tempConfig = getConfig();
const aivenConfig = getProcessedConfig(tempConfig);
export default aivenConfig;