const express = require('express');
const mysql = require('mysql2');

const app = express();

const connection = mysql.createConnection({
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'isurdb'
});

app.get('/', (req, res) => {
    connection.query('SELECT * FROM usuarios', (err, results) => {
    if (err) return res.send("Error DB");
        res.send(results);
    });
    res.send("Conexion establecida");
});