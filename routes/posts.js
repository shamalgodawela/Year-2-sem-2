const express=require('express');
const posts=require('../models/posts');
const assets=require('../models/assets');
const hr =require('../models/hr');
//osanda

const Procureg=require('../models/Procureg');
const suplreg = require('../models/suplreg');

//dinendra
const invposts=require('../models/invposts');
const store=require('../models/store');
const invRequest=require('../models/invRequest');
//ayeshan
const adminposts = require('../models/adminposts');
const regulatory = require('../models/regulatory');
//shamil
const rdposts=require('../models/rdposts');
//asini
const accpost=require('../models/accpost');



const router=express.Router();
//hr save
router.post('/hr/save',(req,res)=>{
    let newhr=new hr(req.body);

    newhr.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"assets record saved"
        });

    });

});

//save assets details

router.post('/assets/save',(req,res)=>{
    let newassets=new assets(req.body);

    newassets.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"assets record saved"
        });

    });

});

//save employee

router.post('/employee/save',(req,res)=>{
    let newEmp=new posts(req.body);

    

    newEmp.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"employee saved"
        });

    });

});
//get hr

router.get('/hr/get',(req,res)=>{
    hr.find().exec((err,hrs)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            extistinghr:hrs
        });

    });
});
// get employee

router.get('/employee/get',(req,res)=>{
    posts.find().exec((err,posts)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            extistingEmp:posts
        });

    });
});
//get assets details
router.get('/assets/get',(req,res)=>{
    assets.find().exec((err,assets)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            extgassets:assets
        });

    });
});
//update employee
/*
router.put('/edit/:id',(req,res)=>{
    posts.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,post)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"updates succesfully"
            });

        }
    );
});

*/
// update user data

router.patch("/edit/:id",async(req,res)=>{
    try {
        const {id} = req.params;

        const updateduser = await  posts.findByIdAndUpdate(id,req.body,{
            new:true
        });

        console.log(updateduser);
        res.status(201).json(updateduser);

    } catch (error) {
        res.status(422).json(error);
    }
})



//delete

router.delete('/employee/delete/:id',(req,res)=>{
    posts.findByIdAndRemove(req.params.id).exec((err,deletedEmp)=>{
        if(err){
            return res.status(400).json({
                message:"delete unsufull"
            })
        }
        return res.json({
            message:"delete success",deletedEmp
        });
    });
});


//delete assets
router.delete('/assets/delete/:id',(req,res)=>{
    assets.findByIdAndRemove(req.params.id).exec((err,deleteassets)=>{
        if(err){
            return res.status(400).json({
                message:"delete unsufull"
            })
        }
        return res.json({
            message:"delete success",deleteassets
        });
    });
});
module.exports=router;


//get a sprecific details
/*
router.get('/employee/:id',(req,res)=>{
    let postId=req.params.id;
    
    posts.findById(postId,(err,post)=>{
        if(err){
            return res.status(400).json({
                success:false,err
            });
        }
        return res.status(200).json({
            success:true,
            post
        });

    });

    
});*/
// get individual user

router.get("/employee/:id",async(req,res)=>{
    try {
        console.log(req.params);
        const {id} = req.params;

        const userindividual = await  posts.findById({_id:id});
        console.log(userindividual);
        res.status(201).json(userindividual)

    } catch (error) {
        res.status(422).json(error);
    }
})

//osandaaa


//Procurement Reg save 

router.post('/procurementmgr/save',(req,res)=>{
    let newEmp=new Procureg(req.body);

    

    newEmp.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Registered"
        });

    });

});

//Supplier Reg get 

router.get('/supreg/get',(req,res)=>{
    suplreg.find().exec((err,suplreg)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            extistingEmp:suplreg
        });

    });
});

//Supplier Reg save 

router.post('/supreg/save',(req,res)=>{

    let newSup=new suplreg(req.body);

    newSup.save((err)=>{

        if(err){

            return res.status(400).json({

                error:err
            });

        }
        return res.status(200).json({

            success:"Inventory  saved"

        });

    });



});

//get a sprecific details for SupplierRegList

router.get("/supreg/:id",async(req,res)=>{
    try {
        console.log(req.params);
        const {id} = req.params;

        const userindividual = await  suplreg.findById({_id:id});
        console.log(userindividual);
        res.status(201).json(userindividual)

    } catch (error) {
        res.status(422).json(error);
    }
})

// router.get('/supreg/:id',(req,res)=>{
//     let postId=req.params.id;
    
//     suplreg.findById(postId,(err,post)=>{
//         if(err){
//             return res.status(400).json({
//                 success:false,err
//             });
//         }
//         return res.status(200).json({
//             success:true,
//             post
//         });

//     });

    
//});

//update for SupplierRegList 

router.patch("/supreg/update/:id",async(req,res)=>{
    try {
        const {id} = req.params;

        const updateduser = await  suplreg.findByIdAndUpdate(id,req.body,{
            new:true
        });

        console.log(updateduser);
        res.status(201).json(updateduser);

    } catch (error) {
        res.status(422).json(error);
    }
})

// router.put('/procurementmgr/update/:id',(req,res)=>{
//     posts.findByIdAndUpdate(
//         req.params.id,
//         {
//             $set:req.body
//         },
//         (err,post)=>{
//             if(err){
//                 return res.status(400).json({error:err});
//             }
//             return res.status(200).json({
//                 success:"updates succesfully"
//             });

//         }
//     );
// });

//delete for SupplierRegList

router.delete('/supreg/delete/:id',(req,res)=>{
    suplreg.findByIdAndRemove(req.params.id).exec((err,deletedEmp)=>{
        if(err){
            return res.status(400).json({
                message:"delete unsufull"
            })
        }
        return res.json({
            message:"delete success",deletedEmp
        });
    });
});





module.exports=router;


//get a sprecific details

router.get('/procurementmgr/:id',(req,res)=>{
    let postId=req.params.id;
    
    Procureg.findById(postId,(err,post)=>{
        if(err){
            return res.status(400).json({
                success:false,err
            });
        }
        return res.status(200).json({
            success:true,
            post
        });

    });

    
});

//dinendra


//save Inventory

router.post('/smanager/save',(req,res)=>{
    let newEmp=new invposts(req.body);

    

    newEmp.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Inventory  saved"
        });

    });

});

// get Inventory

router.get('/smanager/get',(req,res)=>{
    invposts.find().exec((err,invposts)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            extistingEmp:invposts
        });

    });
});






//update Inventory

router.patch("/smanager/update/:id",async(req,res)=>{
    try {
        const {id} = req.params;

        const updateduser = await  invposts.findByIdAndUpdate(id,req.body,{
            new:true
        });

        console.log(updateduser);
        res.status(201).json(updateduser);

    } catch (error) {
        res.status(422).json(error);
    }
})



// router.put('/smanager/update/:id',(req,res)=>{
//     invposts.findByIdAndUpdate(
//         req.params.id,
//         {
//             $set:req.body
//         },
//         (err,post)=>{
//             if(err){
//                 return res.status(400).json({error:err});
//             }
//             return res.status(200).json({
//                 success:"updates succesfully"
//             });

//         }
//     );
// });




//delete Inventory

router.delete('/smanager/delete/:id',(req,res)=>{
    invposts.findByIdAndRemove(req.params.id).exec((err,deletedEmp)=>{
        if(err){
            return res.status(400).json({
                message:"delete unsufull"
            })
        }
        return res.json({
            message:"delete success",deletedEmp
        });
    });
});






//get a sprecific Inventory details

router.get("/smanager/:id",async(req,res)=>{
    try {
        console.log(req.params);
        const {id} = req.params;

        const userindividual = await  invposts.findById({_id:id});
        console.log(userindividual);
        res.status(201).json(userindividual)

    } catch (error) {
        res.status(422).json(error);
    }
})


// router.get('/smanager/:id',(req,res)=>{
//     let postId=req.params.id;
    
//     invposts.findById(postId,(err,post)=>{
//         if(err){
//             return res.status(400).json({
//                 success:false,err
//             });
//         }
//         return res.status(200).json({
//             success:true,
//             post
//         });

//     });

    
// });




//save stores

router.post('/maintaince/save',(req,res)=>{
    let newstore=new store(req.body);

    newstore.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Stores save successfully"
        });
    });
});

//get stores

router.get('/maintaince/get',(req,res)=>{
    store.find().exec((err,store)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            extgstore:store
        });
    });
});

//get a sprecific stores details

router.get('/maintaince/:id',(req,res)=>{
    let postId=req.params.id;
    
    store.findById(postId,(err,post)=>{
        if(err){
            return res.status(400).json({
                success:false,err
            });
        }
        return res.status(200).json({
            success:true,
            post
        });

    });

    
});

//save request

router.post('/request/save',(req,res)=>{
    let newreq=new invRequest(req.body);

    newreq.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Request save successfully"
        });
    });
});

//get request

router.get('/request/get',(req,res)=>{
    invRequest.find().exec((err,invRequest)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            extginvRequest:invRequest
        });
    });
});

//get a sprecific request details

router.get('/request/:id',(req,res)=>{
    let postId=req.params.id;
    
    invRequest.findById(postId,(err,post)=>{
        if(err){
            return res.status(400).json({
                success:false,err
            });
        }
        return res.status(200).json({
            success:true,
            post
        });

    });

    
});

//delete request

router.delete('/request/delete/:id',(req,res)=>{
    invRequest.findByIdAndRemove(req.params.id).exec((err,deletedEmp)=>{
        if(err){
            return res.status(400).json({
                message:"delete unsufull"
            })
        }
        return res.json({
            message:"delete success",deletedEmp
        });
    });
});

//ayeshan 

//save

router.post('/post/save',(req,res) =>{

    let newPost = new adminposts(req.body);
    newPost.save((err)=>{
        if(err){
            return res.status(400).jason({
                error:err
            });
        }
        return res.status(200).json({
            success:"Posts saved successfully"
        });
    });

});

//regulatorySave


//get posts
router.get('/posts',(req,res)=>{
    adminposts.find().exec((err,adminposts)=>{
        if(err){
            return res.status(400).json({
                  error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:adminposts
        });
    });
});

//update details

router.patch("/postupdate/:id",async(req,res)=>{
    try {
        const {id} = req.params;

        const updateduser = await  adminposts.findByIdAndUpdate(id,req.body,{
            new:true
        });

        console.log(updateduser);
        res.status(201).json(updateduser);

    } catch (error) {
        res.status(422).json(error);
    }
});

//find specific details
router.get("/manager/:id",async(req,res)=>{
    try {
        console.log(req.params);
        const {id} = req.params;

        const userindividual = await  adminposts.findById({_id:id});
        console.log(userindividual);
        res.status(201).json(userindividual)

    } catch (error) {
        res.status(422).json(error);
    }
});

//delete details

router.delete('/post/delete/:id',(req,res)=>{
    adminposts.findByIdAndRemove(req.params.id).exec((err,deletedPost)=>{

            if(err) return res.status(400).json({
                message:"Dlete unsuccesful",err
            });

            return res.json({
                message:"Delete succesfull",deletedPost
            });
    });
});

//shamil


//save 

router.post('/employee/save',(req,res)=>{
    let newEmp=new rdposts(req.body);

    

    newEmp.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"employee saved"
        });

    });

});

// get 

router.get('/employee/get',(req,res)=>{
    rdposts.find().exec((err,rdposts)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            extistingEmp:rdposts
        });

    });
});

 
router.patch("/employee/update/:id",async(req,res)=>{
    try {
        const {id} = req.params;

        const updateduser = await  rdposts.findByIdAndUpdate(id,req.body,{
            new:true
        });

        console.log(updateduser);
        res.status(201).json(updateduser);

    } catch (error) {
        res.status(422).json(error);
    }
})

//delete

router.delete('/employee/delete/:id',(req,res)=>{
    rdposts.findByIdAndRemove(req.params.id).exec((err,deletedEmp)=>{
        if(err){
            return res.status(400).json({
                message:"delete unsufull"
            })
        }
        return res.json({
            message:"delete success",deletedEmp
        });
    });
});



module.exports=router;


//get a sprecific details

router.get("/employee/:id",async(req,res)=>{
    try {
        console.log(req.params);
        const {id} = req.params;

        const userindividual = await  rdposts.findById({_id:id});
        console.log(userindividual);
        res.status(201).json(userindividual)

    } catch (error) {
        res.status(422).json(error);
    }
})


//save employee

router.post('/rd/save',(req,res)=>{
    let newEmp=new accpost(req.body);

    

    newEmp.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"employee saved"
        });

    });

});

// get employee

router.get('/rd/get',(req,res)=>{
    accpost.find().exec((err,accpost)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            extistingEmp:accpost
        });

    });
});

//update employee


router.patch("/rd/update/:id",async(req,res)=>{
    try {
        const {id} = req.params;

        const updateduser = await  accpost.findByIdAndUpdate(id,req.body,{
            new:true
        });

        console.log(updateduser);
        res.status(201).json(updateduser);

    } catch (error) {
        res.status(422).json(error);
    }
})

// router.put('/employee/update/:id',(req,res)=>{
//     posts.findByIdAndUpdate(
//         req.params.id,
//         {
//             $set:req.body
//         },
//         (err,post)=>{
//             if(err){
//                 return res.status(400).json({error:err});
//             }
//             return res.status(200).json({
//                 success:"updates succesfully"
//             });

//         }
//     );
// });

//delete

router.delete('/rd/delete/:id',(req,res)=>{
    accpost.findByIdAndRemove(req.params.id).exec((err,deletedEmp)=>{
        if(err){
            return res.status(400).json({
                message:"delete unsufull"
            })
        }
        return res.json({
            message:"delete success",deletedEmp
        });
    });
});






module.exports = router;

