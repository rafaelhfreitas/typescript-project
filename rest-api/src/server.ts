import * as express from 'express';

import { root } from "./routes/root";
import { isInteger } from './utils';


const app = express();

function setupExpress() {

    
    app.route("/").get(root);

}



function startServer() {

    console.log(process.argv);

    const portArg = process.argv[2];

    let port;

    if (isInteger(portArg)){
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