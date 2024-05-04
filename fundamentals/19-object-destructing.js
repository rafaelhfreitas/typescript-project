var course = {
    title: "Typescript Bootcamp",
    subtitle: "Learn the language fundamentals, build practical projects",
    lessonsCount: 10
};
printCourse(course);
function printCourse(course) {
    var title = course.title, subtitle = course.subtitle, lessonsCount = course.lessonsCount;
    console.log("Title: ".concat(title, ", Subtitle: ").concat(subtitle, ", lessonsCount: ").concat(lessonsCount));
}
