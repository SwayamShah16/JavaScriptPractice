"use strict";
class Inst {
}
class Stud {
    name;
    id;
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}
class Sch extends Inst {
    StudentArr = [];
    getInstituteType() {
        return "school";
    }
    addStudent(student) {
        this.StudentArr.push(student);
        console.log("Student added successfully");
    }
    removeStudent() {
        this.StudentArr.pop();
        console.log("Student removed successfully");
    }
}
const s = new Stud("John", 1);
const s1 = new Stud("Jane", 2);
const sch = new Sch();
sch.addStudent(s);
sch.addStudent(s1);
sch.removeStudent();
console.log(sch.StudentArr);
