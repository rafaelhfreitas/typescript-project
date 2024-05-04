
// primitive type:  number 
const lessonsCount = 10;
const total = lessonsCount + 10;
console.log("total = " , total);



// primitive type:  string
// imutable
let title = `Typescript bootcamp`
let subtitle = "Learn the language fundamentals, build practical projects"

// replace with new string of characters and garbage collect destroy the previous ref
title = "Typescript bootcamp v2"

let fullTitle = title + ": " + subtitle;
fullTitle = `${title}: ${subtitle}`;


console.log("Full title :" + fullTitle);



// primitive type:  boolean

const published = true;

if (published) {
    console.log("The course is published !");
}


printCourse(title, subtitle, lessonsCount);

function printCourse(title: string, subtitle: string , lessonsCount: number) {
    let fullTitle = title + subtitle;
    console.log(fullTitle);

}




// primitive type:  object

const course = {
    title: "Typescript Bootcamp",
    subtitle: "Learn the language fundamentals, build pratical projects",
    lessonsCount: 10
}

console.log("The type of course is " + typeof course);