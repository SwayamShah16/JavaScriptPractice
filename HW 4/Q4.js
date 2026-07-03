"use strict";
class Person {
}
class Students extends Person {
    std_id;
    std_name;
    constructor(std_id, std_name) {
        super();
        this.std_id = std_id;
        this.std_name = std_name;
    }
    getDetails() {
        console.log(this.std_id + " " + this.std_name);
    }
    getRole() {
        return "Student";
    }
}
class Teachers extends Person {
    teacher_id;
    teacher_name;
    constructor(teacher_id, teacher_name) {
        super();
        this.teacher_id = teacher_id;
        this.teacher_name = teacher_name;
    }
    getDetails() {
        console.log(this.teacher_id + " " + this.teacher_name);
    }
    getRole() {
        return "Teacher";
    }
}
const stud = new Students(1, "John");
stud.getDetails();
console.log(stud.getRole());
const teacher = new Teachers(1, "Jane");
teacher.getDetails();
console.log(teacher.getRole());
