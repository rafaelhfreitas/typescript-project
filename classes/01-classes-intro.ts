class Course {

    constructor( 
        private _title: string, 
        private subtitle: string, 
        private creationDate: Date
    ) {

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


const course = new Course("Typescript Bootcamp", "Learn the language classes", new Date(2000,1,1))

// Error, private member variable
//course.title = "new value";


course.title = "new value"

console.log(course.age)


console.log(course)

