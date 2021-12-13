module.exports = (sequelize,Sequelize) =>{
    let specification = sequelize.define('Specification',{
        Brand: Sequelize.STRING,
        Manufacturer: Sequelize.STRING,
        Model: Sequelize.STRING,
        ModelName: Sequelize.STRING,
        ProductDimensions: Sequelize.STRING,
        ItemModelNumber: Sequelize.STRING,
        MountingHardware: Sequelize.STRING,
        BatteriesRequired: Sequelize.STRING,
        CountryofOrigin: Sequelize.STRING,
        NetQuantity: Sequelize.STRING,
        GenericName: Sequelize.STRING
    },{
        timestamps:false,
        freezeTableName:true
    });
    // specification.sync();
    return specification
}