function demo(){
    console.log(a)
}

function demo1() {
    demo();
}

function demo2(){
    try {
        demo1();
    } catch (error) {
        console.log(error.name);
        
    }
}

demo2();