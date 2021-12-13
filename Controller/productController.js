var db = require('../Modal/connection');
var Product = db.ProductModal
var Description = require('../Modal/Description')(db.sequelize,db.Sequelize);
var Specification = require('../Modal/SpecificationModal')(db.sequelize,db.Sequelize);
var Variant = require('../Modal/VariantModal')(db.sequelize,db.Sequelize);


exports.Insert = (req,res) =>{
    console.log(req.body)
    Product.create(req.body,{
        include: [{all:true}]}
        )
    .then(data=>{
        res.status(200).send("Created Sucessfully")
    })
    .catch(err=>{console.log(err),res.status(400).send("somethingwent wronge")})
}


exports.GetAll = (req,res) =>{
    var page = req.query._page
    var limit = req.query._limit

    if(page==undefined){
        page=1;
    }
    if(limit==undefined){
        limit=100;
    }
    
    Product.findAll({ include: [{ all: true }],limit:limit,offset:(page-1)*limit})
    .then(data=>{
        res.status(200).send(data);
    })
    .catch(err=>{
        console.log(err);
    })
}

exports.GetById = (req,res) =>{
    var id = parseInt(req.params.id);

    if(!id){
        res.status(400).send("Not Valid Id");
        throw "Not valid ID";
    }

    Product.findByPk(id,{ include: [{ all: true }] })
    .then(data => {
        res.status(200).send(data);
    })
    .catch(err=>{
        console.log(err);
        res.status(400).send("Something Went Wrong");
    })
}

exports.GetByType = (req,res) => {
    var page = req.query._page
    var limit = req.query._limit
    var Type = req.query.Type

    if(Type==undefined){
        res.status(400).send("Please provide Type");
        throw "Type Not Provided";
    }
    if(page==undefined){
        page=1;
    }
    if(limit==undefined){
        limit=100;
    }
    
    Product.findAll({where:{Type:Type}, include: [{ all: true }],limit:limit,offset:(page-1)*limit})
    .then(data=>{
        res.status(200).send(data);
    })
    .catch(err=>{
        console.log(err);
    })
}

exports.GetByCategory = (req,res) =>{
    var page = req.query._page
    var limit = req.query._limit
    var category = req.query.category

    if(category==undefined){
        res.status(400).send("Please provide Type");
        throw "Type Not Provided";
    }
    if(page==undefined){
        page=1;
    }
    if(limit==undefined){
        limit=100;
    }
    
    Product.findAll({where:{category:category}, include: [{ all: true }],limit:limit,offset:(page-1)*limit})
    .then(data=>{
        res.status(200).send(data);
    })
    .catch(err=>{
        console.log(err);
    })
}


exports.GetByName = (req,res) =>{
    var page = req.query._page
    var limit = req.query._limit
    var product_name = req.query.product_name

    if(product_name==undefined){
        res.status(400).send("Please provide Type");
        throw "Type Not Provided";
    }
    if(page==undefined){
        page=1;
    }
    if(limit==undefined){
        limit=100;
    }
    
    Product.findAll({where:{product_name:product_name}, include: [{ all: true }],limit:limit,offset:(page-1)*limit})
    .then(data=>{
        res.status(200).send(data);
    })
    .catch(err=>{
        console.log(err);
    })
}
