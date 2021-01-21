import dotenv from 'dotenv';

dotenv.config();

export const envConfig = {
    port: process.env.PORT || '',
    mongoDbUri: process.env.MONGO_DB_URI || '',
    apiSecret: process.env.API_SECRET || ''
}