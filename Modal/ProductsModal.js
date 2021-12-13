module.exports = (sequelize,Sequelize) =>{
    var product = sequelize.define('Product',{
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        product_name: Sequelize.STRING,
        Type: Sequelize.STRING,
        price: Sequelize.INTEGER,
        category: Sequelize.STRING,
        img: Sequelize.STRING,
        tage: Sequelize.STRING,
        quantity: Sequelize.INTEGER
    });
    var Desciption = require('../Modal/Description')(sequelize,Sequelize)
    var variant = require('../Modal/VariantModal')(sequelize,Sequelize)
    var specifiaction = require('../Modal/SpecificationModal')(sequelize,Sequelize)
    product.hasMany(Desciption);
    product.hasMany(variant);
    product.hasMany(specifiaction);
    // product.sync({force:true})
    // Desciption.sync({force:true})
    // variant.sync({force:true});
    // specifiaction.sync({force:true})
    return product;
}