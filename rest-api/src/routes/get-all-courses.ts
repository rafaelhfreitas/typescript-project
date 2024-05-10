import {Request, Response, NextFunction}  from "express";
import { logger } from "../logger";
import { AppDataSource } from "../datasource";
import { Course } from "../models/course";

export async function getAllCourses(request: Request, response: Response, next: NextFunction) {


    try {

        logger.debug(`Called getAllCousers()`);

        const courses = await AppDataSource
                .getRepository(Course)
                .createQueryBuilder("courses")
                .leftJoinAndSelect("courses.lessons", "LESSONS")
                .orderBy("courses.seqNo").getMany();
        
    
        response.status(200).json({courses});        
        
    } catch (error) {
        logger.error(`Error calling getAllCoursers()`);
        return next(error);
    }


}