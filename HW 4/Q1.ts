class Student {
    name:String = "Tom"
    studentId:Number = 1
    grade:any = "A"
    address:String = "Mumbai"

    displayInfo():void{
        console.log(this.name)
        console.log(this.studentId)
        console.log(this.grade)
        console.log(this.address)
    }

}

const stud = new Student()
stud.displayInfo()