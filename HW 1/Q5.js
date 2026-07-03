const mar1 = [91, 78, 61, 80]
const a = mar1.map((mar1)=> {
    if (mar1 > 85) {
        return "A";
    }
    else if (mar1> 70) {
        return "B";
    }
    else if (mar1> 55) {
        return "C";
    }
    else {
        return "D";
    }
})
console.log(a);

const mar2 = [91, 78, 61, 80]
const b = mar2.filter((mar2)=> {
    return mar2 > 75
})
console.log(b);

const mar3 = [91, 78, 61, 80]
const c = mar3.reduce((tot,mar)=>{
    return tot = tot + mar;
})
console.log(c);
