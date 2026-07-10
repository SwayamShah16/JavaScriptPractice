class Student1{
    name:String;
    id:Number;

    constructor(name:String,id:Number){
        this.name = name
        this.id = id
    }
}

class School1{
    static totalstudents:any=0;
    StudentList:Student1[]=[]

    addStudent(student:Student1):void{
        this.StudentList.push(student);
        School1.totalstudents++ ;
    }

    static incStudCount():Number{
       return School1.totalstudents;
    }
}

const s = new Student1("tom",1)
const s1 = new Student1("Ron",2)
const s2 = new Student1("Harry",3)

const sc = new School1()
sc.addStudent(s);
sc.addStudent(s1)
sc.addStudent(s2)

console.log(School1.incStudCount());
console.log(sc.StudentList);


