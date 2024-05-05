// function createCourse(
//     title: string, 
//     subtitle: string, 
//     lessonsCount: number
// ){
//     console.log(`Creating course with title: ${title}, Subtitle: ${subtitle}, lessons count: ${lessonsCount}`);
//     return { 
//         title,
//         subtitle,
//         lessonsCount
//     } as Course
// }
// function createCourse(
//     title: string, 
//     subtitle: string, 
//     lessonsCount: number
// ): Course {
//     console.log(`Creating course with title: ${title}, Subtitle: ${subtitle}, lessons count: ${lessonsCount}`);
//     return { 
//         title,
//         subtitle,
//         lessonsCount
//     } 
// }
var createCourse = function (title, subtitle, lessonsCount) {
    console.log("Creating course with title: ".concat(title, ", Subtitle: ").concat(subtitle, ", lessons count: ").concat(lessonsCount));
    return {
        title: title,
        subtitle: subtitle,
        lessonsCount: lessonsCount
    };
};
var result = createCourse("Typescript Bootcamp", "Learn the language fundamentals", 19);
console.log(typeof createCourse);
