



// anti pattern using explicity any
let lessonsCountS: any = 10;
let numbersNew: any[] = [1,2 , true, {'hello':'world'}, "hello"]



lessonsCountS = false

// no error without type anotation system
//printCourse(10, "Hello")


printCourse( "Hello", 10);

function printCourse(title: string, lessonsCount: number){

    console.log(`Title: ${title}, lessons count: ${lessonsCount}`)

}