const arr = [10,20,30,40]

const a = arr.map((arr)=> {
    return arr*=arr
})
console.log(a);

const arr1 = [10,20,23,30] 
const b= arr1.filter((arr1)=>{
    return arr1 % 2 != 0
})
console.log(b);

const arr2 = [20,30,40]
const c = arr2.reduce((tot,arr2)=>{
    return tot = tot+ arr2;
})
console.log(c);
