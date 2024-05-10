import { NextFunction, Request, Response } from "express";
import { logger } from "../logger";
import { isInteger } from "../utils";
import { AppDataSource } from "../datasource";
import { Course } from "../models/course";



/**
 * 
 * curl -X PATCH  http://localhost:9000/api/courses/76 -H "Content-Type:application/json" -d '{"title": "Typescript Bootcamp v2"}' 
 * curl -X POST  http://localhost:9000/api/courses -H "Content-Type:application/json" -d '{"url": "rafael-bootcamp",
 * "title": "Rafael Bootcamp v2",
 * "iconUrl": "https://angular-university.s3-us-west-1.amazonaws.com/course-images/typescript-bootcamp-2.jpg",
 * "longDescription": "Learn in depth the Typescript language, build practical real-world projects",
 * "category": "BEGINNER"}' 
 * curl -X DELETE http://localhost:9000/api/courses/77 -H "Content-Type:application/json" 
 *  
 * curl -X POST  http://localhost:9000/api/users -H "Content-Type:application/json" -d '{"email": "rafael@rafael.com", "pictureUrl":"https://avatars.githubusercontent.com/u/5454709", "password":"123", "isAdmin": false}'
 * 
 */

export async function updateCourse(request: Request, response: Response, next: NextFunction){


    try {

        logger.debug(`Called updateCourse()`);

        const courseId = request.params.courseId,
            changes = request.body;
            

        if (!isInteger(courseId)) {
            throw `Invalid course id ${courseId}`
        }


        await AppDataSource
            .createQueryBuilder()
            .update(Course)
            .set(changes)
            .where("id = :courseId", {courseId})
            .execute();


        response.status(200).json({
            message: `Course ${courseId} was updated successfully.`
        })

        


    } catch (error) {
        logger.error(`Error calling updateCourse()`);
        return next(error);
    }
}

