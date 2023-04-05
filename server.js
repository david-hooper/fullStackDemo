import dotenv from 'dotenv';
import pg from 'pg';
const { Client } = pg;
import express from 'express'

const app = express();

dotenv.config();
//let db_URL = ;
const port = process.env.PORT || 3000;
const client = new Client(process.env.DATABASE_URL);
client.connect();
//console.log(client);
app.use(express.json());
app.use(express.static("client"))
app.get('/', (req, res) => {
    res.json({"hello":"world"})
})
app.get('/students', (req, res) => {
    client.query(`SELECT * FROM student`, (err, response) => {
        console.log(err ? err : response.rows)
        res.json(response.rows)
        client.end;
    })
})

app.listen(port, (error) => {
    if (error) {
        console.log(error)
    }
    else {
        console.log(`Listening on port: ${port}`)
    }
})
