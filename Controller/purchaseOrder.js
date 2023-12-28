const PurchaseOrder = require('../Model/purchaseOrder')

 async function parchesingdetail(req,res){
    try {
      const { productName, quantity, pricing, mrp, customer_id } = req.body;

      if (pricing > mrp) {
        return res.status(400).json({ error: 'Pricing is greater than MRP' });
      }
      const purchaseOrder = new PurchaseOrder({
        productName,
        quantity,
        pricing,
        mrp,
       customer_id,
      });

      await purchaseOrder.save();
           res.status(201).json(purchaseOrder);
    } 
    catch (error) {
      console.error('Error adding purchase order:', error);
      res.status(500).json({ error:'Internal Server Error' });
    }
  }
module.exports={parchesingdetail};
