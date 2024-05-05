var course1 = {
    title: "Typescript Bootcamp",
    lessonsCount: 100
};
var course2 = {
    title: "Angular for beginners",
    lessonsCount: 100
};
var course3 = {
    title: "Angular for beginners",
    lessonsCount: 100
};
function printCourses(message) {
    var courses = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        courses[_i - 1] = arguments[_i];
    }
    console.log(message);
    for (var _a = 0, courses_1 = courses; _a < courses_1.length; _a++) {
        var course = courses_1[_a];
        console.log(course.title);
    }
}
// printCourses("Sucesso js", [course1,course2]);
printCourses("Sucesso js", course1, course2, course3);
