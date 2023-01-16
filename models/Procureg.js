const mongoose=require('mongoose');
const postschema=new mongoose.Schema({
    Fname:{
        type:String,
        required:true
    },
    Lname:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:true
    },
    Phone_Number:{
        type:String,
        required:true

    },
    Employee_Number:{
        type:String,
        required:true

    },
    

})

module.exports=mongoose.model('Procureg',postschema);