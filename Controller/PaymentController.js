
var stripe = require('stripe')('sk_test_51K3vsrSJofhnROjzSRxrVBnd0zjOv5ptQxaNwxWGiNgf3SYlWyrcNvfDW7ln2wpi41JhmPWKgKzyC5cI45YejaXu00pftxt7RC');

exports.PaymentConfirm = (req,res) =>{
    var amount = req.body.amount
    delete req.body.amount;
    stripe.charges.create({
        amount:parseInt(amount)*100,
        currency:'INR',
        description:"One Time Payment",
        source : req.body.token.id,
    },
    (err)=>{
        if(err){
            console.log(err);
        }
        res.status(200).send("Payment Sucessfull")
    })
}