function add(a, b=10) {
    let c = a + b;
    return c;
}
console.log(add(5));

arr = [1,2,3,4,5]
function max(arr){
    return Math.max(...arr);
}
console.log(max(arr));