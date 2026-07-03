
function info(status){
    return new Promise((resolve, reject) => {
        if (status) {
            resolve({
                name: "AC", price : 12900
            },{
                name : "WM" , price : 15000
            })
        } else {
            reject("Error")
        }
    });
}

async function test() {
     try {
        const data = await info()
        if (data) {
          console.log(data);
        }
    } catch (error) {
        console.log(error);
    }
}
test();