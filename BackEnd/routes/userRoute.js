const express=require('express');

const router=express.Router();

const Model=require('../model/userModel');

router.post('/add',(req,res)=>{
   new Model(req.body).save()
   .then((result) => {

    console.log(result);
    res.json(result);

   })
   .catch((err) => {
    
    console.error(err);
    res.status(500).json(err);

   });
});
router.delete('/delete/:id',(req,res)=>{
   Model.findByIdAndDelete(req.params.id)
   .then((result) => {
    console.log(result);
    res.json(result);
   })
   .catch((err) => {
    console.error(err);
    res.json(err);
   });
});
router.get('/getByID/:id',(req,res)=>{
   Model.findById(req.params.id)
   .then((result) => {
    console.log(result);
    res.json(result);
   })
   .catch((err) => {
    console.error(err);
    res.json(err);
   });
});

   router.post("/authenticate",(req,res)=>{
      const formdata=req.body;
      Model.findOne({email:formdata.email,password:formdata.password})
      .then((result) => {
          if(result){
              res.status(200).json({message:"Successfully Login"});
          }else{
              res.status(400).json({message:"Invalid password or Email"})
          }
      }).catch((err) => {
          res.status(500).json(err);
      });
  
  });
  

router.get('/show',(req,res)=>{

    Model.find({}).then((result) => {
        console.log(result);
        res.json(result);
    }).catch((err) => {
        console.error(err);
        res.json(err);
    });
   
});

module.exports=router;