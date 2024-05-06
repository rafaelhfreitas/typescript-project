class Course {

    private static TOTAL_COURSES = 0;

    static readonly TYPESCRIPT_TITLE = "Typescript Bootcamp";

    constructor( 
        private _title: string, 
        private price: number,
        private subtitle = "", 
        private creationDate = new Date(2000,1,1)
    ) {
        this.validate();
        Course.TOTAL_COURSES++;
    }

    protected validate(){
        console.log("Called Course Validate()")
        if(this.price <= 0){
            throw "Price must be larger than zero."

        }

    }

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
        title: string, 
        subtitle = "", 
        creationDate = new Date(2000,1,1)
    ){
        super(title, 0, subtitle, creationDate);
    }

    protected validate(): void {
        console.log("Called FreeCourse Validate()")
    }

}

const course = new Course("Typescript Bootcamp", 100, "Learn the language classes", new Date(2000,1,1))

// Error, private member variable
//course.title = "new value";


course.title = "new value"

console.log(course.age)


console.log(course)

const courseWithoutParam = new Course("Typescript Bootcamp",100)

const courseWithStaticVar = new FreeCourse(Course.TYPESCRIPT_TITLE);

console.log(courseWithoutParam.title)

Course.printTitle(courseWithStaticVar);







