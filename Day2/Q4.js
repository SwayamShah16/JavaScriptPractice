function payment(status){
    return new Promise((resolve, reject) => {
        if (status) {
            resolve("Payment Successful")
        } else {
            reject("Error")
        }
    });
}

async function test() {
    try {
        const data = await payment()
        if (data) {
          console.log(data);
        }
    } catch (error) {
        console.log(error);
    }
}

test();