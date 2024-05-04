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
function saveCourse(course, callback) {
    this.course = course;
    setTimeout(function () {
        var _a, _b;
        callback((_b = (_a = this.course) === null || _a === void 0 ? void 0 : _a.title) !== null && _b !== void 0 ? _b : "unknown course.");
    }, 1000);
}
var cb = function (title) { return console.log("Save successfull. ", title); };
saveCourse({ title: "Typescript Bootcamp" }, function () { return console.log("Save successfull."); });
saveCourse({ title: "Typescript Bootcamp" }, cb);
