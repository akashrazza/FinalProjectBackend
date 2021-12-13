const { ProductModal } = require('../Modal/connection');
var db = require('../Modal/connection')
var CartModal = db.CartModal;
var ProductController = db.ProductModal;
exports.InsertModal =async (req,res) =>{
    find_arr=[]
    await CartModal.findAll({where:{user_id:req.body.user_id,product_id:req.body.product_id,variant:req.body.variant},raw:true})
    .then(data=>{
        find_arr=data
        // console.log(data)
    })
    // console.log();
    if(find_arr.length==0){
        await CartModal.create(req.body)
        .then(data=>{
            res.status(200).send("Added To Cart");
        })
        .catch(err=>{
            console.log(err);
            res.status(400).send("Something went Wrong");
        })
    }
    else{
        await CartModal.update({quantity:find_arr[0].quantity+1},{where:{id:find_arr[0].id}})
        .then(data=>{
            res.status(200).send("Added Yo Cart");
        })
        .catch(err=>{
            console.log(err);
            res.status(400).send("SOmething Went wronge");
        })
    }
}


exports.GetALlByUser = async(req,res) =>{
    var user_id = parseInt(req.params.id);
    console.log(user_id)
    var cart = []
    await CartModal.findAll({where:{user_id:user_id},raw:true})
    .then((data)=>{
       cart=data;
       
    })
    .catch(err=>{
        console.log(err);
        
    })
    console.log(cart)
    for (let i=0;i<cart.length;i++){
        await ProductModal.findByPk(cart[i].product_id,{raw:true})
        .then(data=>{
            cart[i]={...cart[i],product:data}
        })
        .catch(err=>{
            console.log(err)
            res.status(400).send("Something Went wronge")
        })
    }
    console.log(cart)
    res.status(200).send(cart);
}

exports.Countre = (req,res) =>{
    var count = req.query.count;
    var id = req.params.id;

    CartModal.update({quantity:count},{where:{id:id}})
    .then(data=>{
        res.status(200).send("Sucessfully Counted");
    })
    .catch(err=>{
        console.log(err);
        res.status(400).send("Something Went Wrong")
    })
}

exports.DeleteItem = (req,res) =>{
    var id = req.params.id;

    CartModal.destroy({where:{id:id}})
    .then(data=>{
        res.status(200).send("Deleted Sucessfully");
    })
    .catch(err=>{
        console.log(err);
        res.status(400).send("Something Went Wronge")
    })
}