
module.exports = (sequelize,Sequelize) =>{
    var TrackModal = sequelize.define('Track',{
        id:{
            type:Sequelize.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        order_id : Sequelize.INTEGER,
        step:Sequelize.INTEGER,
        Description : Sequelize.STRING
    })
    return TrackModal
}
