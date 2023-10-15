import { test } from "tap";
import RestEndpoints from "../restendpoints.js";

test("Health Test", async (t) => {
    const fastify = RestEndpoints();

    t.teardown(() => fastify.close());

    const res = await fastify.inject({
        url: "/health",
        method: "POST",
    });

    const l = t.equal(res.statusCode, 200);
});
