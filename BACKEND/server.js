

const express = require ("express" );
 const mysql= require ("mysql");
const cors = require("cors");

const app = express()

 app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Sudu@1308",
    database: "test",
});





 app.get("/", (req, res) => {
    return res.json("from backend");
 });

app.get("/access", (req, res) => {
    const sql = "SELECT * FROM student";
    db.query(sql, (err, data) => {
        if (err) {
            return res.json(err);
        }
        return res.json(data);
    });
});-


 app.listen(8081, () => {
    console.log("Server is running on port 8081");
 });