const e = require('express');
var db = require('../Modal/connection');
var SendMail = require('../email/email');
var WhatsAppController = require('../whatsapp/whatsapp')
var UserModal = db.UserModal;
var Op = db.Sequelize.Op;
exports.GetALL=(req,res)=>{
    UserModal.findAll()
    .then(data=>{
        res.status(200).send(data);
    })
    .catch(err=>{
        console.log(err);
    })
}

exports.Insert = (req,res) =>{
    console.log(req.body)
    if(req.body.first_name==undefined || req.body.last_name==undefined || req.body.city==undefined || req.body.mobile_no==undefined || req.body.email==undefined || req.body.password==undefined || req.body.question==undefined || req.body.answer==undefined || req.body.DOB==undefined || req.body.role==undefined){
        res.status(400).send("Provide Valid Body");
        throw "Provide Valid Body";
    }

    UserModal.create(req.body)
    .then(data=>{
        SendMail.mail(req.body.email,'Welcome to CART',"Hi,<br><h2>Your Account Created Sucessfully</h2><br>Thanks");
        // WhatsAppController.sendMsg(req.body.mobile_no,"Welcome to my shop.");
        res.status(200).send("Created Sucessfully");
    })
    .catch(err=>{
        console.log(err);
        res.status(400).send("Something Went Wrong");
    })
    
}

exports.VerifyCredentials = (req,res) =>{
    var question = req.query.question;
    var answer = req.query.answer;
    var DOB = req.query.DOB;
    var email = req.query.email;

    if(question==undefined || answer==undefined || DOB ==undefined || email==undefined){
        res.status(400).send("Provide Valid Query");
        throw "Provide Valid Body";
    }

    UserModal.findAll({where:{[Op.and]:[
        {question:question},
        {answer:answer},
        {DOB:DOB},
        {email:email}
    ]}})
    .then(data=>{
        res.status(200).send(data);
    })
    .catch(err=>{
        SendMail.mail(mainoptions);
        res.status(400).send("Something Went Wrong");
    })
}

exports.UpdatePassword=(req,res)=>{
    var id = parseInt(req.params.id);
    
    if(!id){
        res.status(400).send("Invaid ID");
        throw "Invalid Id";
    }

    var password = req.body.password;
    var email = req.body.email;
    if(password==undefined){
        res.status(400).send("Provide Valid Query");
        throw "Provide Valid Body";
    }

    UserModal.update({password:password},
        {where:{id:id}})
    .then(data=>{
        
        SendMail.mail(email,'Password Reset Sucessfull',"Hi,<br><h2>Your Password Reset Sucessfully</h2>Your New Password : "+password+"<br>Thanks");
        res.status(200).send("Updated Sucessfully");
    })
    .catch(err=>{
        console.log(err);
        res.status(400).send("Something Went Wrong");
    })
}   

exports.Login = (req,res) =>{
    var email = req.query.email;
    var password = req.query.password;

    if(email==undefined || password==undefined){
        res.status(400).send("Invalid params");
        throw "Invalid Params";
    }

    UserModal.findAll({where:{email:email,password:password}})
    .then(data=>{
        res.status(200).send(data);
    })
    .catch(err=>{
        console.log(err);
        res.status(400).send("Invalid Credentials")
    })
}


exports.GetUserById = (req,res) =>{
    var id = req.query.id;

    if(id==undefined){
        res.status(400).send("Please send paramas");
        throw "Please send paramas";
    }

    UserModal.findAll({where:{id:id}})
    .then((data)=>{
        res.status(200).send(data);
    })
    .catch(err =>{
        res.status(400).send("Something Went Wrong")
    })
}

exports.GetUserByName = (req,res) =>{
    var name = req.query.first_name;

    if(name==undefined){
        res.status(400).send("Provide Name");
    }
    
    UserModal.findAll({where:{first_name:name}})
    .then(data=>{
        res.status(200).send(data);
    })
    .catch(err=>{
        res.status(400).send("Something went wrong");
    })
}

exports.DeleteUser = (req,res) =>{
    var id = req.params.id;

    if(id==undefined){
        res.status(400).send("Id Not Defined");
        throw "Id Not Defined";
    }

    UserModal.destroy({where:{id:id}})
    .then(data=>{
        res.status(200).send("Deleted Sucessfully");
    })
    .catch(err=>{
        console.log(err);
        res.status(400).send("Some Thing Went Wrong");
    })
}