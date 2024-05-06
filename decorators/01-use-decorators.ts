import { Log, LoggingLevel, Perf } from "./02-method-decorator";
import { SealClass } from "./03-class-decorator";
import { DatabaseId } from "./04-property-decorator";

@SealClass
class DbService {

    @Perf()
    @Log(LoggingLevel.INFO)
    saveData(data: any) {
        console.log(`saving data in the database...`)
    }
}

const db = new DbService();

db.saveData({hello: "World"});

/*
// just for trigger the error after apply @SealClass
Object.defineProperty(DbService, "sayHello", {
    value: () => {
        console.log("Hello world"); }
})
*/


class Course {

    @DatabaseId()
    id: string;

    title: string;

    constructor(title: string){
        this.title = title;
    }

    print(message: string) {
        console.log(`${message}, Course ${this.title}, id ${this.id}`);
    }

}



const course1 = new Course("Typescript Bootcamp");

console.log(`Courser 1 id:`, course1.id);

const course2 = new Course("Angular core in depth");

console.log(`Courser 2 id:`, course2.id);


console.log("Course 1", course1);

console.log("Course 2", course2)
