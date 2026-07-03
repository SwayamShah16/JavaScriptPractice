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
}
class Dept {
    totalCourses = 0;
    Courses = [];
    addCourse(courses) {
        this.Courses.push(courses);
        this.totalCourses++;
    }
}
const c1 = new Course("Math", 101, "Dr. Smith");
const c2 = new Course("Science", 102, "Dr. Johnson");
const dept = new Dept();
dept.addCourse(c1);
dept.addCourse(c2);
console.log(dept.totalCourses);
console.log(dept.Courses);
