var connection = require('../Modal/connection');
var OrderModal = connection.OrderModal;
var UserModal  = connection.UserModal;
var ProductModal = connection.ProductModal;
var SendMail = require('../email/email');
var WhatsAppController = require('../whatsapp/whatsapp')
exports.CreateOrder = (req,res) =>{
    // req.body.products = new Array(1,2,3)
    console.log(req.body)
    OrderModal.create(req.body)
    .then(data=>{
        // console.log(data)
        UserModal.findByPk(req.body.user_id)
        .then(data1=>{
            console.log(data1.email)

            SendMail.mail(data1.email,'Order Placed Sucessfully',"Hi,<br><h2>Your Order placed Sucessfully</h2><br>Thanks");
            // WhatsAppController.sendMsg(data1.mobile_no,"Order Placed Sucessfully");
        })
        res.status(200).send("Created Sucessfully");
    })
    .catch(err=>{
        console.log(err)
        res.status(400).send("Something Went Wrong");
    })
}

exports.DeleteOrder = (req,res) =>{
    var id = req.params.id

    OrderModal.destroy({where:{id:id}})
    .then(data=>{
        res.status(200).send("Deleted Sucessfully");
    })
    .catch(err=>{
        res.status(400).send("Something Went Wronge");
    })
}

exports.GetOrderByUser =async (req,res) =>{
    var user_id = req.params.id
    var res_obj=[]
    var pro_obj =[]
    await OrderModal.findAll({where:{user_id:user_id},raw:true})
    .then(data=>{
        
        for (var i=0;i<data.length;i++){
            var obj = data;
           pro_obj.push(obj[i].products)
            res_obj.push({...obj[i]})
        }
        
    })
    .catch(err=>{
        console.log(err)
        res.status(400).send("Something Went Wronge")
    })
    
    for(var i=0;i<pro_obj.length;i++){
        var product_arr=[]

        for (var j=0;j<pro_obj[i].length;j++){
            console.log('b')
            await ProductModal.findByPk(pro_obj[i][j])
            .then(data=>{
                console.log('c')
                product_arr.push(data);
            })
        }
        res_obj[i]={...res_obj[i],product_arr:product_arr}
        console.log(res_obj)
    }
    console.log(res_obj)
    res.status(200).send(res_obj);
}


exports.GetAllOrder = async(req,res) =>{
    
    var res_obj=[]
    var pro_obj =[]
     await OrderModal.findAll({raw:true})
    .then(data=>{
        for (var i=0;i<data.length;i++){
            var obj = data;
           pro_obj.push(obj[i].products)
            res_obj.push({...obj[i]})
        }
        
    })
    .catch(err=>{
        console.log(err)
        res.status(400).send("Something Went Wronge")
    })
    
    for(var i=0;i<pro_obj.length;i++){
        var product_arr=[]
        for (var j=0;j<pro_obj[i].length;j++){
            await ProductModal.findByPk(pro_obj[i][j])
            .then(data=>{
                product_arr.push(data);
            })
        }
        res_obj[i]={...res_obj[i],product_arr:product_arr}
    }
    res.status(200).send(res_obj);
}
