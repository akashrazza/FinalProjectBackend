module.exports =  (sequelize,Sequelize) =>{
    var Address = sequelize.define('Address',{
        first_name : Sequelize.STRING,
        last_name : Sequelize.STRING,
        address : Sequelize.STRING,
        email : Sequelize.STRING,
        phone:Sequelize.STRING,
        information:Sequelize.STRING,
        userId:Sequelize.INTEGER
    })
    return Address
}