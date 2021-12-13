module.exports = (sequelize,Sequelize) => {
    let CartModal = sequelize.define('Cart',{
        id:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        user_id:Sequelize.INTEGER,
        product_id:Sequelize.INTEGER,
        quantity:Sequelize.INTEGER,
        variant:Sequelize.INTEGER
    })
    return CartModal
}