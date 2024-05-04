// let title: string;
var _a, _b, _c;
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
var course = null;
var title = (_b = (_a = course === null || course === void 0 ? void 0 : course.textFields) === null || _a === void 0 ? void 0 : _a.title) !== null && _b !== void 0 ? _b : "No title found";
console.log(title);
if ((_c = course === null || course === void 0 ? void 0 : course.textFields) === null || _c === void 0 ? void 0 : _c.title) {
    console.log("The title is ".concat(course.textFields.title));
}
