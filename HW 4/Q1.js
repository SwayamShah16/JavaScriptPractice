"use strict";
class Student {
    name = "Tom";
    studentId = 1;
    grade = "A";
    address = "Mumbai";
    displayInfo() {
        console.log(this.name);
        console.log(this.studentId);
        console.log(this.grade);
        console.log(this.address);
    }
}
const stud = new Student();
stud.displayInfo();
