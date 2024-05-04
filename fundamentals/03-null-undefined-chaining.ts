// let title: string;

// console.log("title = " + title)


// if(!title) {
//     console.log("The value of title not known yet.")
// }



// optional chaining 

// let course = {
//     textFields: {
//         title: "Typescript bootcamp"
//     }
// }

// console.log(course?.textFields?.title);

// if(course?.textFields?.title){
//     console.log(`The title is ${course.textFields.title}`)
// }



// optional chaining returns undefined

// let course = null

// console.log(course?.textFields?.title); 

// if(course?.textFields?.title){
//     console.log(`The title is ${course.textFields.title}`)
// }



// null coalescing opertator ??
let course = null

const title = course?.textFields?.title ?? "No title found";

console.log(title);

if(course?.textFields?.title){
    console.log(`The title is ${course.textFields.title}`)
}