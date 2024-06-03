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

app.get('/',(req,res) =>{

    let html = fs.readFileSync('./data/index.html', 'utf8');
    const listItem = fs.readFileSync('./data/listItem.html', 'utf8'); 

    const sql = `
    SELECT id, name, age, type
    FROM animals
    WHERE age < 10
    `;

    // const sql = `
    // SELECT DISTINCT id, name age, type
    // FROM animals
    // WHERE type = 'plėšrūnas'
    
    // `;




    connection.query(sql, (err,rows) => {
        if (err) throw err

        console.log('Answer', rows);
        let listItems = '';
        rows.forEach(animal => {
            let liHtml = listItem;
            liHtml = liHtml
                .replace('{{ID}}', animal.id)
                .replace('{{NAME}}', animal.name)
                .replace('{{AGE}}', animal.age)
                .replace('{{TYPE}}', animal.type);
            listItems += liHtml;
        });
        html = html.replace('{{LI}}', listItems)
        res.send(html);
    });
});

app.post('/create', (req, res) => {

    const { name, age, type } = req.body;

  

    // const sql = `
    //     INSERT INTO trees (name, height, type)
    //     VALUES ( '${name}', ${parseFloat(height)}, '${type}' )
    // `;

    const sql = `
    INSERT INTO animals (name, age, type)
    VALUES ( ?, ?, ? )
`;
    connection.query(sql, [name, parseFloat(age), type], err => {
        if (err) throw err;
        res.redirect(302, 'http://localhost:8080/');
    });
});

app.post('/cut', (req, res) => {

    const id = req.body.id;
    const sql = `
    DELETE FROM animals
    WHERE id = ${id}
    `;
    connection.query(sql, (err) => {
        if (err) throw err;

        res.redirect(302, 'http://localhost:8080/');
    });
})

app.post('/grow', (req, res) => {

    const { id, age } = req.body;

       const sql = `
    UPDATE animals
    SET age = ?
    WHERE id = ?
`;
    connection.query(sql, [parseFloat(age), id], err => {
        if (err) throw err;
        res.redirect(302, 'http://localhost:8080/');
    });

});







app.listen(port, _ => {
    console.log(`Animals manager are listening on port ${port}`);
});