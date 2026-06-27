class Product{
    id = "Pro12"
    name = "TV"
    price = 12000

    displayDetails(){
        console.log(this.id);
        console.log(this.name);
        console.log(this.price);
    }
}

const pro = new Product();
pro.displayDetails()