const User = require('../model/user');
const product = require('../model/product');
const mongoose = require('mongoose');
//const { check, validationResult } = require('express-validator/check');
var validator = require("email-validator");
var passwordValidator = require('password-validator');
var schema = new passwordValidator();

schema
.is().min(8)                                    // Minimum length 8
.is().max(100)                                  // Maximum length 100
.has().uppercase()                              // Must have uppercase letters
.has().lowercase()                              // Must have lowercase letters
.has().digits()                                 // Must have digits
.has().not().spaces()                           // Should not have spaces
.is().not().oneOf(['Passw0rd', 'Password123']); // Blacklist these values
 
exports.create = (req,res)=>{

    const user = new User({
        userName:req.body.userName,
        password:req.body.password
    });
    if(!(validator.validate(req.body.userName))){
        return   res.status(400).send({"message":"Invalid email Id"});
      }else if(!(schema.validate(req.body.password))){
         return res.status(400).send({"message":"Invalid password(must be atleast 8 characters long,atleast 1 uppercase and lowercase, no spaces,must have digits)"});
      }else{

        User.find({
            userName: req.body.userName
        },(err,users)=>{
            if(err){
                res.status(400).send({'message':"Please check the username"});
               return;
   
           }
           else
           if(users.length){
                res.status(400).send({"message":"username already exits"});
           }
            else{
                user.save().then(() =>{
                    res.status(200).send({'message':'user created successfully'});
                });
               
           }
        })

      };
    
    

     
  
   
    
};

exports.productCreate = (req,res) => {
    User.findOne({
        userName: req.params.userName
    },(err,arr)=>{
        if(err || arr == null){
            res.status(400).send({'message':'USer not found'});
            return;
        }
        else if(!(/[a-zA-Z]{3,}/.test(req.body.productname))){
            console.log(!(/\w/.test(req.body.productname)));
    
            res.status(400).send({"message":"invalid product name"});
    
            
    
        }else if(!(/\d/).test(req.body.price)){
            res.status(400).send({"message":"price must be a number"});
            
        }
        else{
            arr.products.push({
                productname: req.body.productname,
                price: req.body.price
    
            });
            arr.save().then(()=>{
                res.status(200).send({'message':'Product created successfully'});
            }).catch(()=>{
                res.status(400).send({'message':'Product not created'});
    
            });

        }
        
    });
    

}




exports.productUpdate = (req,res) => {
    if(!(validator.validate(req.params.userName))){
        res.status(401).send({"message":"Invalid email ID"});

    }else if(!(/[a-zA-Z]{3,}/.test(req.body.productname))){
        console.log(!(/\w/.test(req.body.productname)));

        res.status(400).send({"message":"invalid product name"});

        

    }else if(!(/\d/).test(req.body.price)){
        res.status(400).send({"message":"price must be a number"});
        
    }
    else{

        User.updateOne({
            userName: req.params.userName,
            "products._id":req.params.id
        },
        {$set: {"products.$.productname":req.body.productname,"products.$.price":req.body.price}},
    
        (err)=>{
            if(err){
                res.status(400).send({"message":"Unauthorized user"})
            }
            else{
    
                res.status(204).send({"message":"Product updated"});
    
            }
            
        });

    }


    
    

}


exports.productDelete = (req,res) => {

    User.findOne({
        userName:req.params.userName,
        "products._id":req.params.id
    },(err,user)=>{
        if(err || user == null){
            console.log(user);
            res.status(401).send({"message":"Unauthorized User"});
        }
        else{
          
            
                User.updateOne({
                    userName: req.params.userName
                },
                {$pull: {products :{"_id":req.params.id}}},
            
                (err)=>{
                    //console.log(user);
                   
                    if(err){
                        
                        res.status(400).send({"message":"Invalid product"})
                    }
                   
                    
                    else{
                        //console.log(user.products.length);
                        res.status(204).send({"message":"Product deleted"});
            
                    }
                    
                });
    

            


           


        }
    })

   

    
        



   
    
   
    

}


exports.productRead = (req,res) => {
    User.findOne({
        userName: req.params.userName,
        
        
    },(err,arr)=>{
        if(err || arr==null ){
            res.status(401).send({"message":"Unauthorized User"});
        }else if(!arr.products.length){
            res.status(401).send({"message":"no products to be viewed"})

        }
        else{
            res.status(200).send(arr.products);

        }
        
    });
    

}







exports.delete = (req,res)=>{

    
    User.findOneAndDelete({userName:req.params.userName}
        ,(err,user)=>{
            if(err || user == null){
                res.status(400).send({"message":"invalid user name"})
            }
            else{
                res.status(200).send({"message":"user deleted successfully"})

            }
        })

   

};