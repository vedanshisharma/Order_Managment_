const ShippingDetails = require('../Model/shippingDetails');

async function addShippingDetails(req, res) {
  try {
    const { address, city, pincode, purchaseOrderId, customerId } = req.body;

    const shippingDetails = new ShippingDetails({
      address,
      city,
      pincode,
      purchaseOrderId,
      customerId,
    });

    await shippingDetails.save();
    res.status(201).json(shippingDetails);
  } catch (error) {
    console.error('Error adding shipping details:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
module.exports = { addShippingDetails };
