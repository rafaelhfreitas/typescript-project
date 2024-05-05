interface Course {
    title: string;
    subtitle: string;
    lessonsCount: number;
}

type CourseRecord = [string, string, number];

const courseRecord: CourseRecord = ["Typescript Bootcamp", "Learn the language fundamentals", 100];

function createCourse(title: string, subtitle: string) {
    
    console.log(` Creating course with title: ${title}, Subtitle: ${subtitle} `);
    const Course = {
        title,
        subtitle
    } as Course;

    return Course;
}