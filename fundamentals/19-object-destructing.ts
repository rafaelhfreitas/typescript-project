
interface Course {
    title:string;
    subtitle:string;
    lessonsCount:number;
}

let course: Course = {
    title: "Typescript Bootcamp",
    subtitle: "Learn the language fundamentals, build practical projects",
    lessonsCount: 10
};


printCourse(course);


function printCourse(course: Course) {

    const {title, subtitle, lessonsCount} =  course

    console.log(`Title: ${title}, Subtitle: ${subtitle}, lessonsCount: ${lessonsCount}`)
}