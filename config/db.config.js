module.exports = {
    db:"postgres",
    usernme:"rajakumar",
    password:"test",
    host:"localhost",
    dialect:"postgres",
    pool:{
        max:5,
        min:0,
        acquire:50000,
        idle:10000
    }
}