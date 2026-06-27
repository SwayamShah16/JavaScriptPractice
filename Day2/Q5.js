const arr = [10,20,30]
function max(){
    return Math.max(...arr)
}

console.log(max());

function add(a,b=10){
    console.log(a+b);   
}
add(10);
