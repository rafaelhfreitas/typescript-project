import { HasTitle } from "./02-interfaces";
import { CoursesService } from "./03-singleton";

abstract class Course implements HasTitle{

    private static TOTAL_COURSES = 0;

    static readonly TYPESCRIPT_TITLE = "Typescript Bootcamp";

    protected constructor( 
        public id: string,
        protected _title: string, 
        protected price: number,
        protected subtitle = "", 
        protected creationDate = new Date(2000,1,1)
    ) {
        this.validate();

        const service = CoursesService.instance();

        Course.TOTAL_COURSES++;
    }

    printId() {
        console.log(`The course id is ${this.id}`)
    }

    protected abstract validate();

    static printTitle(course: Course){
        console.log(`The title of the course ${course.title}`)
    }


    get title() {
        return this._title;
    }

    set title(newTitle: string){
        if(!newTitle) {
            throw "Title cannot be empty";
        }

        this._title = newTitle;
    }

    get age() {
        const ageInMs = new Date().getTime() - this.creationDate.getTime();
        return Math.round(ageInMs / 1000 / 60 / 24);
    }

}


class FreeCourse extends Course{

    constructor(
        id: string,
        title: string, 
        subtitle = "", 
        creationDate = new Date(2000,1,1)
    ){
        super(id, title, 0, subtitle, creationDate);
    }

    protected validate(): void {
        
        console.log("Called FreeCourse Validate()")
    }

}

// cannot create a instance of abstract class
//const course = new Course("Typescript Bootcamp", 100, "Learn the language classes", new Date(2000,1,1))

// Error, private member variable
//course.title = "new value";


// course.title = "new value"
// console.log(course.age)
// console.log(course)

//const courseWithoutParam = new Course("Typescript Bootcamp",100)

const course = new FreeCourse("aaaa",Course.TYPESCRIPT_TITLE);


CoursesService.instance();


// Course.printTitle(course);







