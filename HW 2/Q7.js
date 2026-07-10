function item(quantity) {
    if (quantity === 0) {
        throw new Error("Quantity out of stock");
    }
}

function item1(quantity) {
    item(0);
}

function item2(quantity) {
    try{
        item1(0);
    }
    catch(error){
        console.error(error.message);
    }
}
item2(0);
