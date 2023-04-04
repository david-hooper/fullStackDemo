import dotenv from 'dotenv';
import postgres from "postgres";
import express from 'express'

const app = express();
const port = process.env.PORT || 3000;

dotenv.config();
//let db_URL = ;
const sql = postgres(process.env.DATABASE_URL);
app.use(express.json());
app.use(express.static("public"))
app.get('/', (req, res) => {
    res.json({"hello":"world"})
})
app.get('/students', (req, res) => {
    sql`SELECT * FROM pg_database;`.then((result)=> {
        //res.json(result);
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
