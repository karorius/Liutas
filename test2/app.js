const express = require('express');
const bodyParser = require('body-parser');
const fs = require('node:fs');
const app = express();
const port = 8080;

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'zoo'
});

connection.connect();
// SELECT column1, column2, ...
// FROM table_name;


app.get('/',(req,res) =>{

    let html = fs.readFileSync('./data/index.html', 'utf8');
    const listItem = fs.readFileSync('./data/listItem.html', 'utf8'); 
    // const sql = `
    
    // `;
    // connection.query(sql, (err,rows) => {
    //     if (err) throw err

    //     console.log('Answer', rows);
    // })
    res.send(html);
})













app.listen(port, _ => {
    console.log(`Animals manager are listening on port ${port}`);
});