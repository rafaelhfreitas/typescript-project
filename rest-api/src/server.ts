import * as dotenv from "dotenv";

const result = dotenv.config();

if (result.error){
    console.log(`Error loading environment variables, aborting...`);
    process.exit(1);
}

console.log(process.env.PORT)

import * as express from 'express';
import { root } from "./routes/root";
import { isInteger } from './utils';


const app = express();

function setupExpress() {

    app.route("/").get(root);

}


function startServer() {
    
    let port;
    const portEnv = process.env.PORT,
     portArg = process.argv[2];

    console.log(process.argv);     
    
    if (isInteger(portEnv)) {
        port = parseInt(portEnv);
    }

    if (!port && isInteger(portArg)){
        port = parseInt(portArg);
    }

    if (!port) {
        port = 9000;
    }

    app.listen(port, () => {    
        console.log(`HTTP REST API Server is now running at http://localhost:${port}`);
    }) 
}


setupExpress();
startServer();