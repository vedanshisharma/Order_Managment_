const mongoose = require('mongoose');

const shippingDetailsSchema = new mongoose.Schema({
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  pincode: {
    type: String,
    required: true,
  },
  purchaseOrderId: {
    type: String,
    ref: 'PurchaseOrder',
    required: true,
  },
  customerId: {
    type: String,
    ref: 'Customerdetail',
    required: true,
  },
});

const ShippingDetails = mongoose.model('ShippingDetails', shippingDetailsSchema);
module.exports = ShippingDetails;



