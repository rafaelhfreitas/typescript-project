import { NextFunction, Request, Response } from "express";
import { logger } from "../logger";
import { isInteger } from "../utils";
import { AppDataSource } from "../datasource";
import { Lesson } from "../models/lesson";

export async function findLessonsForCourse(request: Request, response: Response, next: NextFunction){

    try {

        logger.debug(`Called findLessonsForCourse()`); 


        logger.debug(`request params`, request.params);


        const courseId = request.params.courseId,
                query = request.query as any,
                pageNumber = query?.pageNumber ?? "0",
                pageSize = query?.pageSize ?? "3";

        if (!isInteger(courseId)) {
            throw `Invalid course id ${courseId}`;
        }

        if (!isInteger(pageNumber)) {
            throw `Invalid pageNumber id ${pageNumber}`;
        }

        if (!isInteger(pageSize)) {
            throw `Invalid pageSize id ${pageSize}`;
        }

        logger.debug(`Variables: courseId = ${courseId} / pageNumber = ${pageNumber} / pageSize = ${pageSize}`);

        const lessons = await AppDataSource
            .getRepository(Lesson)
            .createQueryBuilder("lessons")
            .where("lessons.courseId = :courseId", {courseId})
            .orderBy("lessons.seqNo")
            .skip(pageNumber * pageSize)
            .take(pageSize)
            .getMany();
            


        response.status(200).json({lessons});
        
    } catch (error) {
        logger.error(`Error calling findLessonsForCourse()`);
        return next(error);
        
    }
}