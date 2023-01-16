const mongoose=require('mongoose');
const postschema=new mongoose.Schema({
    pname:{
        type:String,
        required:true

    },
    cname:{
        type:String,
        required:true
    },
    manufacturer:{
        type:String,
        required:true
    },
    epacks:{
        type:String,
        required:true
    },
    madvice:{
        type:String,
        required:true

    },
    mdate:{
        type:String,
        required:true
    },
    edate:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('rdposts',postschema);