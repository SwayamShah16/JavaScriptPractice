"use strict";
class Student {
    id;
    name;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
class School {
    totalStudents = 0;
    Students = [];
    addStudent(student) {
        this.Students.push(student);
        this.totalStudents++;
    }
    incStudentCount() {
        this.totalStudents;
    }
}
const s = new Student(1, "John");
const s1 = new Student(2, "Jane");
const sch = new School();
sch.addStudent(s);
sch.addStudent(s1);
console.log(sch.totalStudents);
console.log(sch.Students);
