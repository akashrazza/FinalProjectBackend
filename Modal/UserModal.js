
module.exports = (sequelize,Sequelize) =>{
    var usermodal = sequelize.define('User',{
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: Sequelize.STRING,
        last_name: Sequelize.STRING,
        city: Sequelize.STRING,
        mobile_no: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.STRING,
        question: Sequelize.STRING,
        answer: Sequelize.STRING,
        DOB: Sequelize.STRING,
        role: Sequelize.STRING
    })
    return usermodal;
}