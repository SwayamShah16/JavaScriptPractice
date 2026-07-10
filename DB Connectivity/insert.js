const mysql = require('mysql');

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"db"
})

function connectDB(){ 
    db.connect((err)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log("Database Connected");
        }
    })
}
connectDB();

let name
let salary 
const info = {name,salary}

function insert(info){
    db.query('INSERT INTO info SET ?', info, (err)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log("Data Inserted");
        }
    })  
}

insert({name: "John Doe", salary: 50000});
insert({name: "Jane Smith", salary: 60000});