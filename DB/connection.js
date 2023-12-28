const mongoose=require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/OrderManagment")
try{
    console.log("Server is connected to DB")
}
catch{
    console.log("Error in DB connection !!")
}
