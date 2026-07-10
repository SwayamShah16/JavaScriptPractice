
function test(age){
    try {
        if (age<18) {
            throw new Error
        } else {
            console.log("Valid");
        }
    } catch (error) {
        console.log(error.name+" "+error.message);       
    }
}

console.log(test(20));
