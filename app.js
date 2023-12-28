const express = require("express");
const bodyParser=require("body-parser");
const apiroutes=require("./router/apiRoute")
const app = express();
app.use(bodyParser.json());


app.use("/api",apiroutes);


app.listen(4000,() => {
  console.log("Server is running on port 4000!!");

});



