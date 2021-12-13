var nodemailer = require('nodemailer');

var nodemailer_transpoter = new nodemailer.createTransport({
    service:'gmail',
    auth : {
        user:'akashrazza@gmail.com',
        pass:'Sunita8757#'
    }
})

var mainoptions = {
    'from':'akashrazza@gmail.com',
    'to':'raja.kumar@mtxb2b.com',
    'subject':'Hello',
    'html':"<h1>Hello</h1>"
}

exports.mail = (to,subject,message) => nodemailer_transpoter.sendMail({
    'from':'akashrazza@gmail.com',
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