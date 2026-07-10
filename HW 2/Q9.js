class InvalidCouponCodeError extends Error {
  constructor(message) {
    super(message);
    this.name = "InvalidCouponCodeError";
  }
}

function applyCouponCode(coupon) {
    if(coupon && coupon.length !== 6) { 
        try{
            throw new InvalidCouponCodeError("Invalid coupon code provided.");
        }catch(error){  
            console.error(error.message);
        }
    }
    else{
        console.log("Coupon code applied successfully.");
    }
}

applyCouponCode("ABC1234");