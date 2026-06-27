
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
    
}