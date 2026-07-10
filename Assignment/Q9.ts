class Course{
    courseName:String
    courseCode:Number
    instructor:any

    constructor(courseName:String,courseCode:Number,instructor:any){
        this.courseName = courseName
        this.courseCode = courseCode
        this.instructor = instructor
    }

    courseInfo():void{
        console.log(this.courseCode);
        console.log(this.courseName);
        console.log(this.instructor);
    }
}

const c1 = new Course("IT",1,"Tom")
const c2 = new Course("Comp",2,"Harry")

c1.courseInfo()
c2.courseInfo()