class Inventory{
    product
    quantity 
    constructor(product, quantity){
        this.product = product;
        this.quantity = quantity;
    }
    
    checkQuantity(product){
        if(this.quantity < 5){
            throw new Error("Insufficient quantity for product: " + product);
        } else {
            console.log("Sufficient quantity for product: " + product);
        }
    }
}

const inventory = new Inventory("Laptop", 3);
try {
    inventory.checkQuantity("Laptop");
} catch (error) {
    console.error(error.message);
}