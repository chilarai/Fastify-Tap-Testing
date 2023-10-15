import * as dotenv from "dotenv";
import { createClient } from "redis";

dotenv.config();

export const DataUrl = async (): Promise<string> => {
    const redisClient: string = `redis://${process.env.KEYDB_HOST}:${process.env.KEYDB_PORT}`;

    const client = createClient({
        password: process.env.KEYDB_PASSWORD,
        url: redisClient,
    });
    client.on("error", (err) => console.log("Redis Client Error", err));
    await client.connect();

    return "hello";
};
