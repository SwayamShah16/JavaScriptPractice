
function pay(status){
    return new Promise((resolve, reject) => {
        if (status) {
            resolve("Payment Successful")
        } else {
            reject("Failed")
        }
    });
}

async function test() {
    try {
        const data = await pay(true)
        if (data) {
            console.log(data);
        }
    } catch (error) {
        console.log(error.name+" "+error.message);
    }
}

test()