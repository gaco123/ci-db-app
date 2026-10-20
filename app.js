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
        if (err) {
            console.error('Error en la consulta:', err);
            return res.status(500).send("Error DB");
        }
        res.send(results);
    });
});

// ¡IMPORTANTE! Escuchar en 0.0.0.0 para que Docker pueda exponer el puerto
app.listen(3000, '0.0.0.0', () => {
    console.log('Servidor escuchando en el puerto 3000');
});