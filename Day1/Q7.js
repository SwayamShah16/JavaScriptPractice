const Emp =[{
    name : "tom",salary : 12000
},
{
    name :"jerry", salary: 15000
},
{
    name :"harry", salary: 25000
},
{
    name :"sam", salary: 5000
}
]

const empFil = Emp.filter((Emp)=>{
    return Emp.salary > 10000
})

console.log(empFil);

