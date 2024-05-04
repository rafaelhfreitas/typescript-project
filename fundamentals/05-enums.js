var CourseType;
(function (CourseType) {
    CourseType[CourseType["FREE"] = 0] = "FREE";
    CourseType[CourseType["PREMIUM"] = 1] = "PREMIUM";
    CourseType[CourseType["PRIVATE"] = 2] = "PRIVATE";
    CourseType[CourseType["HIDDEN"] = 3] = "HIDDEN";
})(CourseType || (CourseType = {}));
var course = {
    title: "Typescript Bootcamp",
    type: CourseType.HIDDEN
};
console.log(course);
