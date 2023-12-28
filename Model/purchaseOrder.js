const mongoose = require("mongoose");
const { v4: uuidv4 } = require('uuid');
const purchaseOrderSchema = new mongoose.Schema({

  purchasing_id: { 
    type: String, 
    default: uuidv4, 
    unique: true 
},
  productName: {
     type: String, 
     required: true 
    },
  quantity: { 
    type: Number, 
    required: true
 },
  pricing: { 
    type: Number,
     required: true 
    },
  mrp: { 
    type: Number,
     required: true 
    },
  customer_id: { 
    type:String,
     ref: 'Customer', 
     required: true},
});

const PurchaseOrder = mongoose.model('PurchaseOrder', purchaseOrderSchema);

module.exports = PurchaseOrder;


