const mongoose=require("mongoose")
const validator=require("validator")
const { v4:uuidv4 } = require('uuid');
require("../DB/connection")

const customerSchema= new mongoose.Schema({
customer_id: { 
    type: String, 
    default: uuidv4, 
    unique: true 
},
customer_name:{
        type:String,
        required:true,
       },
email:{
   type:String,
   required:true,
   validate: validator.isEmail,
   message: 'Invalid email address'
},
city: {
    type:String,
    required:true,
},
mobile_number :{
    type:Number,
    require:true,
    match:/^[0-9]{10}$/,
}
});
const Customer = mongoose.model("Customerdetail",customerSchema)
module.exports = Customer;



