import { NextFunction, Request, Response } from "express";
import { logger } from "../logger";
import { AppDataSource } from "../datasource";
import { Course } from "../models/course";

export async function createCourse(
    request: Request, response: Response, next: NextFunction
){


    try {
        logger.debug(`Called createCourse()`);

        const data = request.body;

        if(!data) {
            throw `No data avaible, cannot save course.`
        }


        await AppDataSource
            .manager.transaction(
                "REPEATABLE READ",
                async (transactionalEntityManager) => {
                    const result = await transactionalEntityManager
                        .getRepository(Course)
                        .createQueryBuilder("courses")
                        .select("MAX(courses.seqNo)", "max")
                        .getRawOne();
                }
            )

            

    } catch (error) {
        logger.debug(`Error calling createCourse().`)
        return next(error);
    }

}