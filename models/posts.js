const mongoose=require('mongoose');
const postschema=new mongoose.Schema({
    name:{
        type:String,
        required:true

    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    number:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        required:true

    },
    EPF:{
        type:Number,
        required:true
    },
    department:{
        type:String,
        required:true
    },
    

})

module.exports=mongoose.model('posts',postschema);