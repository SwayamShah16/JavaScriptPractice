function getStudentInfo<T>(info:T):T {
    return info;
}

console.log(getStudentInfo<String>("Tom"))
console.log(getStudentInfo<Number>(1));
console.log(getStudentInfo<any>("marks : 45"));


