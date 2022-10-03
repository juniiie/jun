const express = require("express");
const app = express();
const mysql = require("mysql");

// Connect DB
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "employeeSystem",
});

// Create routes
app.post("/create", (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  const country = req.body.country;
  const position = req.body.position;
  const wage = req.body.wage;

  db.query(
    "INSERT INTO employees (name, age, country, position, wage) VALUES (?,?,?,?,?)",
    [name, age, country, position, wage],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

// Run server on different PORT
app.listen(3001, () => {
  console.log("Server is running on Port 3001");
});

// Setting up MySQL
