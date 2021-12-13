var db = require('../Modal/connection');
var TrackModal = db.TrackModal
console.log(db.Trackmodal)
// console.log(db)
var ProductModal = db.ProductModal
exports.CreateTrack = (req,res)=>{
    console.log(req.body)
    console.log(TrackModal)
    TrackModal.create(req.body)
    .then(data=>{
        res.status(200).send("Created Sucessfully");
    })
    .catch(err=>{
        console.log(err);
        res.status(400).send("Something Went Wrong");
    })
}

exports.GetTrack = (req,res) =>{
    var order_id = req.params.id;

    TrackModal.findAll({where:{order_id:order_id}})
    .then(data=>{
        res.status(200).send(data);
    })
    .catch(err=>{
        res.status(400).send("Something Went Wrong");
    })
}

exports.DeleteTrack = (req,res) =>{
    var Track_id = req.params.id;

    TrackModal.destroy({where:{id:Track_id}})
    .then(data=>{
        res.status(200).send("Deleted Sucessfully");
    })
    .catch(err=>{
        res.status(400).send("Something Went Wrong")
    })
}

exports.UpdateTrack = (req,res) =>{
    var Track_id = req.params.id;

    TrackModal.update(req.body,{where:{id:Track_id}})
    .then(data=>{
        res.status(200).send("Updated Sucessfully");
    })
    .catch(err=>{
        res.status(400).send("Something Went Wrong")
    })
}
