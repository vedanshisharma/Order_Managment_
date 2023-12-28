const express = require("express");
const router = express.Router();

const customerController = require("../Controller/customer");
const purchasingController = require("../Controller/purchaseOrder");
const shippingController=require("../Controller/shippingController")



router.post('/addCustomer',customerController.customerdetail);
router.post('/addPurchasing', purchasingController.parchesingdetail);
router.post('/addShippingDetails', shippingController.addShippingDetails);


module.exports = router;
