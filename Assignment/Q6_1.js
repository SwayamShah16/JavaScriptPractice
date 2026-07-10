
function pay(status){
 return new Promise((resolve, reject) => {
    if (status) {
        resolve("Payment Successful")  
    } else {
        reject("Unsuccessful")
    }
 });
}

pay(false).then((result) => {
    console.log(result);
}).catch((err) => {
    console.log("Failed");
});