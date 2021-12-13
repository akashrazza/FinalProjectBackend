module.exports = (sequelize,Sequelize) =>{
    let variant = sequelize.define('variants',{
        color: Sequelize.STRING,
        quantity: Sequelize.INTEGER,
        size: Sequelize.STRING
    },{
        timestamps:false,
        freezeTableName:true
    })
    // variant.sync();
    return variant;
}