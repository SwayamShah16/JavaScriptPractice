abstract class Person{
    abstract getDetails():void;
    abstract getRole():String;
} 

class Studentchk extends Person{
     name:String 
     id:Number
     constructor(name:String,id:Number){
        super()
        this.name = name;
        this.id = id;
     }
     getDetails():void{
        console.log(this.name);
        console.log(this.id);    
     }
     getRole():String{
        return "Student"
     }
}

class Teacherchk extends Person{
     name:String 
     id:Number
     constructor(name:String,id:Number){
        super()
        this.name = name;
        this.id = id;
     }
     getDetails():void{
        console.log(this.name);
        console.log(this.id);    
     }
     getRole():String{
        return "Teacher"
     }
}

const stu = new Studentchk("Tom",12);
const t = new Teacherchk("Albert Gonzalez",2)
console.log(stu.getRole());
stu.getDetails()
console.log(t.getRole());
t.getDetails()


