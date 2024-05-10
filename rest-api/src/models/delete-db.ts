import * as dotenv from "dotenv";

const result = dotenv.config();


import "reflect-metadata";
import { AppDataSource } from "../datasource";
import { Lesson } from "./lesson";
import { Course } from "./course";



async function deleteDb(){ 


    await AppDataSource.initialize();
    console.log(`Database connection ready.`);

    console.log(`Clearing LESSONS table...`);
    await AppDataSource.getRepository(Lesson).delete({});
    
    console.log(`Clearing COURSES table...`);
    await AppDataSource.getRepository(Course).delete({});

}


deleteDb()
    .then(() => {
        console.log(`Finished deleting database.`);
        process.exit(0);

    })
    .catch(err => {
        console.error(`Error deleting database, `, err);
    })