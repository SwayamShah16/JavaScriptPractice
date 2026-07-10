class InvalidAge extends Error{
    constructor(message){
        super(message)
        this.name = "InvalidAge"
    }
}

function valid(age){
    try {
        if (age<18) {
            throw new InvalidAge("Age is not Valid")
        } else {
            console.log("Valid");
        }
    } catch (error) {
        console.log(error.name+" "+error.message);       
    }
}

console.log(valid(5));
