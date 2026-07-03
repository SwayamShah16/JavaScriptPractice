abstract class Person {
    abstract getDetails(): void;
    abstract getRole(): string;
}

class Students extends Person {
    std_id: number;
    std_name: string;  

    constructor(std_id: number, std_name: string) {
        super();
        this.std_id = std_id;
        this.std_name = std_name;
    }
    
    getDetails(): void {
        console.log(this.std_id + " " + this.std_name);
    }

    getRole(): string {
        return "Student";
    }
}

class Teachers extends Person {
    teacher_id: number;
    teacher_name: string;  

constructor(teacher_id: number, teacher_name: string) {
        super();
        this.teacher_id = teacher_id;
        this.teacher_name = teacher_name;
    }
    
    getDetails(): void {
        console.log(this.teacher_id + " " + this.teacher_name);
    }

    getRole(): string {
        return "Teacher";
    }
}


const stud = new Students(1, "John");
stud.getDetails();
console.log(stud.getRole());

const teacher = new Teachers(1, "Jane");
teacher.getDetails();
console.log(teacher.getRole());
