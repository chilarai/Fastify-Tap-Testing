import fastify from "fastify";
import FastifyCors from "@fastify/cors";

import { DataUrl } from "./dataurl.js";

export default function RestEndpoints() {
    const RESTServer = fastify({
        logger: { transport: { target: "pino-pretty" } },
    });

    // Handle CORS
    RESTServer.register(FastifyCors, {
        origin: "*",
        methods: ["GET", "POST", "OPTIONS"],
        allowedHeaders: ["authorization", "schema", "content-type"],
    });

    // Check if the server is up and running
    RESTServer.post("/health", async (_request, response) => {
        const responseData = await DataUrl();
        await response
            .code(200)
            .header("Content-Type", "application/json; charset=utf-8")
            .send(responseData);
    });

    return RESTServer;
}
