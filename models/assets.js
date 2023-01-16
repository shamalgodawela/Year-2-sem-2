const mongoose=require('mongoose');
const assetsschema=new mongoose.Schema({
    date:{
        type:String,
        required:true
      
    },
    equipment:{
        type:String,
        required:true

    },
    serviceEname:{
        type:String,
        required:true

    },
    serviceEnumber:{
        type:Number,
        required:true
    },
    Tprice:{
        type:Number,
        required:true
    }
})

module.exports=mongoose.model('assets',assetsschema);