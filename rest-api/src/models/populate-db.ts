import * as dotenv from "dotenv";

const result = dotenv.config();


import "reflect-metadata";

import {COURSES, USERS} from  "./db-data";
import { AppDataSource } from "../datasource";
import { Course } from "./course";
import { DeepPartial } from "typeorm";
import { Lesson } from "./lesson";
import { logger } from "../logger";
import { User } from "./user";
import { calculatePasswordHash } from "../utils";


async function populateDb(){
    
    await AppDataSource.initialize();
    console.log(`Database connection ready.`);

    const courses = Object.values(COURSES) as DeepPartial<Course>[];
    const courseRepository = AppDataSource.getRepository(Course);
    const lessonRepository = AppDataSource.getRepository(Lesson);


    for(let courseData of courses){
        
        console.log(`Inserting course ${courseData.title}`);
        const course = courseRepository.create(courseData);
        await courseRepository.save(course);

        for (let lessonData of courseData.lessons) {
            
            console.log(`Inserting lesson ${lessonData.title}`);
            const lesson = lessonRepository.create(lessonData);
            lesson.course = course;
            await lessonRepository.save(lesson);
        }
    }

    const users = Object.values(USERS) as any[];

    for (let userData of users) {

        console.log(`Inserting user: ${userData}`);

        const {email, pictureUrl, isAdmin, passwordSalt, plainTextPassword } = userData;

        const user = AppDataSource
            .getRepository(User)
            .create({
                email,  
                pictureUrl,
                isAdmin,
                passwordSalt,
                passwordHash: await calculatePasswordHash(plainTextPassword, passwordSalt)
            });

        await AppDataSource.manager.save(user);

    }

    const totalCourses = await courseRepository.createQueryBuilder().getCount();

    const totalLessons = await lessonRepository.createQueryBuilder().getCount();

    console.log(` Data inserted - courses ${totalCourses}, lessons ${totalLessons}`);





}


populateDb()
    .then(() => {
        console.log(`Finished populate database, exiting !`);
        process.exit(0);
    })
    .catch( err => {
        console.error(`Error populating database. `, err);
    });