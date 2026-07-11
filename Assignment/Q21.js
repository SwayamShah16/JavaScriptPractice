export const pi = 3.14
export function valid(isTrue) {
    if (isTrue) {
        console.log("True");
        
    } else {
        console.log("False");
        
    }
}

export const arr = [1,2,3,4,5]


valid(true)

module.exports= {pi,arr,valid}