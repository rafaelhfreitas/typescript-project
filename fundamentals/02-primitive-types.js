// primitive type:  number 
var lessonsCount = 10;
var total = lessonsCount + 10;
console.log("total = ", total);
// primitive type:  string
// imutable
var title = "Typescript bootcamp";
var subtitle = "Learn the language fundamentals, build practical projects";
// replace with new string of characters and garbage collect destroy the previous ref
title = "Typescript bootcamp v2";
var fullTitle = title + ": " + subtitle;
fullTitle = "".concat(title, ": ").concat(subtitle);
console.log("Full title :" + fullTitle);
// primitive type:  boolean
var published = true;
if (published) {
    console.log("The course is published !");
}
printCourse(title, subtitle, lessonsCount);
function printCourse(title, subtitle, lessonsCount) {
    var fullTitle = title + subtitle;
    console.log(fullTitle);
}
// primitive type:  object
var course = {
    title: "Typescript Bootcamp",
    subtitle: "Learn the language fundamentals, build pratical projects",
    lessonsCount: 10,
    author: {
        firstName: "Rafael",
        lastName: "Freitas"
    }
};
// inline declaration but just for understood what happen underhood in typescript compilation
// the type script can infere the type to assing the type
var courseImplicitSyntax = {
    title: "Typescript Bootcamp",
    subtitle: "Learn the language fundamentals, build pratical projects",
    lessonsCount: 10,
    author: {
        firstName: "Rafael",
        lastName: "Freitas"
    }
};
console.log("The type of course is " + typeof course);
