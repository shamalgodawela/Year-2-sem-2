const mongoose=require('mongoose');
const postschema=new mongoose.Schema({
    apname:{
        type:String,
        required:true

    },
    asname:{
        type:String,
        required:true
    },
    aquantity:{
        type:String,
        required:true
    },
    adate:{
        type:String,
        required:true
    },
    atprice:{
        type:String,
        required:true

    },
    

})

module.exports=mongoose.model('accpost',postschema);