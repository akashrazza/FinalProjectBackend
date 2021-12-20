module.exports = (sequelize,Sequelize) =>{
    var orderModal = sequelize.define('Order',{
        id:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        AddressId : Sequelize.STRING,
        products_quantity_amount :Sequelize.ARRAY(Sequelize.ARRAY(Sequelize.INTEGER)),
        user_id:Sequelize.INTEGER,
        Amount:Sequelize.INTEGER,
        Payment:Sequelize.STRING
    })
    return orderModal;
}