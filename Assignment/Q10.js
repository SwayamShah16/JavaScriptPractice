"use strict";
class Person {
}
class Studentchk extends Person {
    name;
    id;
    constructor(name, id) {
        super();
        this.name = name;
        this.id = id;
    }
    getDetails() {
        console.log(this.name);
        console.log(this.id);
    }
    getRole() {
        return "Student";
    }
}
class Teacherchk extends Person {
    name;
    id;
    constructor(name, id) {
        super();
        this.name = name;
        this.id = id;
    }
    getDetails() {
        console.log(this.name);
        console.log(this.id);
    }
    getRole() {
        return "Teacher";
    }
}
const stu = new Studentchk("Tom", 12);
const t = new Teacherchk("Albert Gonzalez", 2);
console.log(stu.getRole());
stu.getDetails();
console.log(t.getRole());
t.getDetails();
