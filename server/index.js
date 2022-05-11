 const express = require("express");
const app =express();
// const mysql = require("mysql");
// const cors = require('cors');

// const db = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "",
//   database: "userdatabase",
// });

// db.connect(function(err) {
//   if (err) {
//     console.log(err);
//   }
//   else{
//   console.log("Connected!");
//   }
// });


// app.use(cors());


app.get('/',(req,res)=>{
 res.send("it's working");
});




app.listen(3001,()=>{
  console.log("running on port 3001")
})