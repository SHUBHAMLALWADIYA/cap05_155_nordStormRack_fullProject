const mongoose=require("mongoose");

const cartSchema=mongoose.Schema({
userId:{type:mongoose.Types.ObjectId},
productId:{type:mongoose.Types.ObjectId},
isRemove:{type:Boolean}
},{versionKey:false})

const CartModel=mongoose.model("cart",cartSchema);

module.exports=CartModel