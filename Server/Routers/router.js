const express=require('express')
const router=express.Router()


const Controller=require("../controller/controller")





router.get("/products",Controller.fetchData)
router.post("/placeOrder",Controller.placeOrder)






module.exports=router;