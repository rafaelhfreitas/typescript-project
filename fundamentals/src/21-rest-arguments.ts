interface Course {
    title: string;
    lessonsCount: number;
}


const course1: Course = {
    title: "Typescript Bootcamp",
    lessonsCount: 100
}


const course2: Course = {
    title: "Angular for beginners",
    lessonsCount: 100
}

const course3: Course = {
    title: "Angular for beginners",
    lessonsCount: 100
}


function printCourses( message: string , ...courses: Course[]) {
     console.log(message);


     for(let course of courses) {
        console.log(course.title);
     }

}

// printCourses("Sucesso js", [course1,course2]);



printCourses("Sucesso js", course1,course2, course3);

