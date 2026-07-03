class Student{
    id:number;
    name:string;

    constructor(id:number,name:string){
        this.id=id;
        this.name=name;
    }
}

class School{
    totalStudents:any = 0;
    Students:Student[] = [];

    addStudent(student:Student){
        this.Students.push(student);
        this.totalStudents++;
    }

    incStudentCount(){
        this.totalStudents;
    }
}

const s = new Student(1,"John");
const s1 = new Student(2,"Jane");

const sch = new School();
sch.addStudent(s);
sch.addStudent(s1);
console.log(sch.totalStudents);
console.log(sch.Students);