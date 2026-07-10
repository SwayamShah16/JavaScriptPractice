class Emp{
    name;
    id;
    salary;

    constructor(name,id,salary){
        this.name = name
        this.id = id
        this.salary = salary
    }

    displayInfo(){
        console.log(this.name);
        console.log(this.id);
        console.log(this.salary);
    }
}

const emp = new Emp("Harry",12,12000);
emp.displayInfo();