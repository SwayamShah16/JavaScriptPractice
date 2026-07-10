abstract class Inst{
    abstract getInstituteType(): string;
}

interface Manage{
    addStudent(student: Stud): void;
    removeStudent(): void;
}

class Stud{
    name:String;
    id:Number;
    constructor(name:String, id:Number){
        this.name = name;
        this.id = id;
    }
}
class Sch extends Inst implements Manage{
    StudentArr: Stud[] = [];
    getInstituteType(): string {
        return "school";
    }
    addStudent(student:Stud): void {
        this.StudentArr.push(student);
        console.log("Student added successfully");
    }
    removeStudent(): void {
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