var connection = require('../Modal/connection')
var AddressModal = connection.AddressModal



exports.InsertAddress = (req,res) =>{
    console.log(req.body)
    if(req.body.first_name==undefined || req.body.last_name==undefined || req.body.email==undefined || req.body.address==undefined || req.body.phone==undefined || req.body.information==undefined || req.body.userId==undefined){
        res.status(400).send("Invalid Body Provided");
        throw "Invalid Body Provided";
    }
    console.log("Address Create")
    AddressModal.create(req.body)
    .then(data=>{
        res.status(200).send(data);
    })
    .catch(err=>{
        console.log(err);
        res.status(400).send("Error in Inserting");
    })
}


exports.GetAddressByUser = (req,res) => {
    var user_id = req.params.id;
    
    AddressModal.findAll({where:{userId:user_id}})
    .then(data=>{
        res.status(200).send(data);
    })
    .catch(err=>{
        console.log(err);
        res.status(400).send("Something Went Wrong")
    })
}

exports.DeleteAddress = (req,res) =>{
    var addressId = req.params.id;

    AddressModal.destroy({where:{id:addressId}})
    .then(data=>{
        res.status(200).send("Deleted Sucessfully");
    })
    .catch(err=>{
        console.log(err);
        res.status(400).send("Something Went Wrong");
    })
}

exports.GetAddressById = (req,res) =>{
    var id = req.params.id;

    AddressModal.findByPk(id)
    .then(data=>{
        res.status(200).send(data)
    })
    .catch(err=>{
        console.log(err);
        res.status(400).send("Something Went wrong");
    })
}