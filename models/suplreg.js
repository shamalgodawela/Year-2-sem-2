const mongoose=require('mongoose');
const postschema=new mongoose.Schema({
    Cname:{
        type:String,
        required:true
    },
    VAT_Certificate_No:{
        type:String,
        required:true
    },
    Phone_Number:{
        type:String,
        required:true
    },
    Supplier_ID_No:{
        type:String,
        required:true
    },
    Acc_No:{
        type:String,
        required:true

    },
    

})

module.exports=mongoose.model('suplreg',postschema);