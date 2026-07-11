abstract class Institute{
    abstract getInstituteType(): string;
}

interface Management{
    addStudent(student: Student): void;
    removeStudent(): void;
}

class Student{
    name:String;
    id:Number;
    constructor(name:String, id:Number){
        this.name = name;
        this.id = id;
    }
}
class School extends Institute implements Management{
    StudentArr: Student[] = [];
    totalCount: any = 0;
    getInstituteType(): string {
        return "school";
    }
    addStudent(student:Student): void {
        this.StudentArr.push(student);
        console.log("Student added successfully");
        this.totalCount++;
    }
    removeStudent(): void {
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