class Emp{
    id = 1;
    name = "Tom";
    salary = 12000;
    address = "Mumbai";

    displayInfo() {
      console.log(this.id);
      console.log(this.name);
      console.log(this.salary);
      console.log(this.address);  
    }
}

const emp = new Emp()
emp.displayInfo();