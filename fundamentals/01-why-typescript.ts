const courseName = "Typescript Bootcamp";



if (courseName) {

    let subtitle = "Learning java script";

    printCouserName(courseName);

}

function printCouserName(name: string) {
    console.log("The course name is " + name.toUpperCase());

}