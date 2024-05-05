// function saveCourse(course, callback: Function) {

//     setTimeout( () =>  {
//         callback("success");
//     }, 1000);

// }

// const cb = () => console.log("Save successfull");

// saveCourse({title: "Typescript Bootcamp"}, 
//     () =>  console.log("Save successfull.")
// );


// saveCourse({title: "Typescript Bootcamp"}, cb);






// function saveCourse(course, callback: Function) {

//     this.course = course;
    
//     setTimeout( () =>  {
//         callback(this.course?.title ?? "unknown course.");
//     }, 1000);

// }

// const cb = (title: string) => console.log("Save successfull. ", title);

// saveCourse({title: "Typescript Bootcamp"}, 
//     () =>  console.log("Save successfull.")
// );


// saveCourse({title: "Typescript Bootcamp"}, cb);








function saveCourse(course, callback: Function) {

    this.course = course;
    
    setTimeout( () =>  {
        callback(this.course?.title ?? "unknown course.");
    }, 1000);

}

const cb = (title: string) => console.log("Save successfull. ", title);

saveCourse({title: "Typescript Bootcamp"}, 
    () =>  console.log("Save successfull.")
);


saveCourse({title: "Typescript Bootcamp"}, cb);