"use strict";
class Institute {
}
class Student {
    name;
    id;
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}
class School extends Institute {
    StudentArr = [];
    totalCount = 0;
    getInstituteType() {
        return "school";
    }
    addStudent(student) {
        this.StudentArr.push(student);
        console.log("Student added successfully");
        this.totalCount++;
    }
    removeStudent() {
        this.StudentArr.pop();
        console.log("Student removed successfully");
        this.totalCount--;
    }
}
const stu = new Student("John", 1);
const stu1 = new Student("Jane", 2);
const school = new School();
school.addStudent(stu);
school.addStudent(stu1);
console.log(school.StudentArr);
console.log("Total Students: " + school.totalCount);
