"use strict";
class Course {
    courseName;
    courseCode;
    instructor;
    constructor(courseName, courseCode, instructor) {
        this.courseName = courseName;
        this.courseCode = courseCode;
        this.instructor = instructor;
    }
    courseInfo() {
        console.log(this.courseCode);
        console.log(this.courseName);
        console.log(this.instructor);
    }
}
const c1 = new Course("IT", 1, "Tom");
const c2 = new Course("Comp", 2, "Harry");
c1.courseInfo();
c2.courseInfo();
