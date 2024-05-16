import { NextFunction, Request, Response } from "express";
import { logger } from "../logger";

const JWT_SECRET = process.env.JWT_SECRET;
const jwt  = require("jsonwebtoken");


export function checkIfAuthenticated(
    request: Request, response: Response, next: NextFunction
) {

    const authJwtToken = request.headers.authorization;

    if(!authJwtToken){
        logger.info(`The authentication JWT is not present, access denied.`);
        response.sendStatus(403);
        return;
    }


    checkJwtValidity(authJwtToken)
        .then( user => {

            logger.info(`Authentication JWT successfully decoded: `, user);

            request["user"] = user;

            next();

        })
        .catch( error => {
            logger.error(`Couldn't validate the authentication JWT, access denied.`, error);
            response.sendStatus(403);
        })

}



async function  checkJwtValidity(authJwtToken: string ) {
    
    const user = await jwt.verify(authJwtToken, JWT_SECRET);

    logger.info("Found user details in JWT:", user);

    return user;
}