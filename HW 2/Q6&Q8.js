function Payment(isPaid){
   try{
        if(isPaid){
            console.log("Payment is successful");
        }
   }
   catch(err){
        console.log("Payment failed or network issue");
   }
   finally{
        console.log("Task Completed");
   }
}

console.log(Payment(true));