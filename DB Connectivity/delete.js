const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'db'
});

const dbConnect = () => {
  db.connect((err) => {
    if (err) {  
    console.error('Error connecting to the database:', err);
    } else {
    console.log('Connected to the database');
    }   
    });
}

dbConnect();

const deleteData = (id) => {
  db.query('DELETE FROM info WHERE id = ?', [id], (err, result) => {
    if (err) {
      console.error('Error deleting data:', err);
    } else {
      console.log("Deleted rows");
    }   
});
}

deleteData(1);