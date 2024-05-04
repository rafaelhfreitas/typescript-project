function printCourse(title, subtitle, lessonsCount) {
    if (lessonsCount === void 0) { lessonsCount = 0; }
    console.log("Title: ".concat(title, ", Subtitle: ").concat(subtitle, ", lessonsCount: ").concat(lessonsCount));
}
printCourse("Typescript Bootcamp", "Learn the language fundamentals, build pratical projects", 10);
printCourse("Typescript Bootcamp", "Learn the language fundamentals, build pratical projects");
