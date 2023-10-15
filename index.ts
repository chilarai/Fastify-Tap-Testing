import RestEndpoints from "./restendpoints.js";
import * as dotenv from "dotenv";

dotenv.config();

const RESTServer = RestEndpoints();

RESTServer.listen(
    { port: Number(process.env.REST_APP_PORT), host: "0.0.0.0" },
    function (err, _address) {
        if (err) {
            RESTServer.log.error(err);
            process.exit(1);
        }
    }
);

console.log(`\n Server started`);
