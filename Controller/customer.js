const Customerdetail = require('../Model/customer');

async function customerdetail(req,res){
  try {
    const { customer_id, customer_name, email, city, mobile_number } = req.body;

    const data = new Customerdetail({
      customer_id,
      customer_name,
      email,
      city,
      mobile_number,
    });

    await data.save();
    res.json({ message: 'Successfully added the data of Customer' });

  } catch (error) 
  {
    console.error('Error adding customer:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
module.exports ={customerdetail};
