class Course {

    title: string;
    subtitle: string;
    creationDate: Date;


    constructor( title: string, subtitle: string, creationDate: Date) {
        this.title = title;
        this.subtitle = subtitle;
        this.creationDate = creationDate;

    }

    age() {
        const ageInMs = new Date().getTime() - this.creationDate.getTime();
        return Math.round(ageInMs / 1000 / 60 / 24);
    }

}


const course = new Course("Typescript Bootcamp", "Learn the language classes", new Date(2000,1,1))



console.log(course.age())

