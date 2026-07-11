const emp = [{
    id :1,
    salary: 12000
},{
    id :2,
    salary: 15000
},{
    id :3,
    salary: 18000
}]

const a = emp.filter((emp)=>{
    return emp.salary >= 15000
})

console.log(a)