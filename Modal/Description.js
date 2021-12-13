module.exports = (sequelize,Sequelize) =>{
    let description = sequelize.define('Description',{
        
        text:Sequelize.STRING,
    },{
        timestamps:false,
        freezeTableName:true
    })
    // description.sync();
    return description;
}