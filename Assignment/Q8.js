"use strict";
class Student1 {
    name;
    id;
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}
class School1 {
    static totalstudents = 0;
    StudentList = [];
    addStudent(student) {
        this.StudentList.push(student);
        School1.totalstudents++;
    }
    static incStudCount() {
        return School1.totalstudents;
    }
}
const s = new Student1("tom", 1);
const s1 = new Student1("Ron", 2);
const s2 = new Student1("Harry", 3);
const sc = new School1();
sc.addStudent(s);
sc.addStudent(s1);
sc.addStudent(s2);
console.log(School1.incStudCount());
console.log(sc.StudentList);
