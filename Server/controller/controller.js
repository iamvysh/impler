 const Data=require("../utils/Data")


 const fetchData=async(req,res)=>{
    try {

        res.status(200).json({
            message:"success",
            Data:Data
        })
        
    } catch (error) {
        res.staus(500).json({
            message:"error",
            error:error.message
        })
        
    }

}

const placeOrder = async(req, res) => {

    try {
        const { firstName, lastName, address } = req.body;
  
  
    if (!firstName || !lastName || !address) {
      return res.status(400).json({ error: 'First name, last name, and address are required.' });
    }
  
   
  
    
    return res.status(200).json({ message: 'Order placed successfully.' });
        
    } catch (error) {
        return res.status(500).json({ message: 'Iternal server errror' ,error:error.message});
    }
    
    
  };




module.exports={fetchData,placeOrder}