function payment(status){
    return new Promise((resolve, reject) => {
     if (status) {
         resolve("Payment Successful");
     } else {
         reject("Error");
     }
    });
}
payment().then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});
