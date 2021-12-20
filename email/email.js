var nodemailer = require('nodemailer');

var nodemailer_transpoter = new nodemailer.createTransport({
    service:'gmail',
    auth : {
        user:'rajatestk@gmail.com',
        pass:'Test123#'
    }
})


exports.mail = (to,subject,message) => nodemailer_transpoter.sendMail({
    'from':'rajatestk@gmail.com',
    'to':to,
    'subject':subject,
    'html':message
},(err,info)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(info.response)
    }
})