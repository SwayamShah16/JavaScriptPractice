function meth(){
    console.log(i);  
}

function meth1(){
 meth()
}

function meth2(){
    try {
        meth1()
    } catch (error) {
        console.log(error.name);
    }
}
meth2()