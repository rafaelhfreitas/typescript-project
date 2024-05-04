interface Course  {
    readonly title: string,
    subtitle: string,
}

let course: Course = {
    title: "Typescript Bootmap",
    subtitle: "Learn the language fundamentals, build practival projects",
    //lessonsCount: 10
}

// compiler erro because of interface readonly param
// course.title = "teste"


interface Course {
    lessonsCount?: number
}

let otherCourse: Course = {
    title: "Typescript Bootmap",
    subtitle: "Learn the language fundamentals, build practival projects",
    lessonsCount: 10

}