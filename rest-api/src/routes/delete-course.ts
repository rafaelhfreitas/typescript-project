import { NextFunction, Request, Response } from "express";
import { logger } from "../logger";
import { isInteger } from "../utils";
import { AppDataSource } from "../datasource";
import { Lesson } from "../models/lesson";
import { Course } from "../models/course";

export async function deleteCourseAndLessons(
    request: Request, response: Response, next: NextFunction
) {

    try {
        logger.debug(`Called deleteCourseAndLessons()...`);

        const courseId = request.params.courseId;

        if (!isInteger(courseId)) {
            throw `Invalid courseId ${courseId}`;
            
        }

        AppDataSource.manager.transaction(
            async (transactionEntityManager) => {

                await transactionEntityManager
                    .createQueryBuilder()
                    .delete()
                    .from(Lesson)
                    .where("courseId =  :courseId", {courseId})
                    .execute();

                await transactionEntityManager
                    .createQueryBuilder()
                    .delete()
                    .from(Course)
                    .where("id = :courseId", {courseId})
                    .execute();                

            }
        );

        response.status(200).json({
            message: `Course delete successfully ${courseId}`
        });

    } catch (error) {
        logger.debug(`Error calling deleteCourseAndLessons()...`);
        return next(error);
    }

}