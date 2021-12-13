var dbConfig = require('../config/db.config');
var Sequelize = require('sequelize');

var sequelize = new Sequelize(dbConfig.db,dbConfig.usernme,dbConfig.password,{
    host:dbConfig.host,
    dialect :dbConfig.dialect,
    pool:{
        min:dbConfig.pool.min,
        max:dbConfig.pool.max,
        acquire:dbConfig.pool.acquire,
        idle:dbConfig.pool.idle
    }
})

// sequelize.authenticate()
// .then(data=>{
//     console.log("Server Connected");
// })
// .catch(err=>{
//     console.log(err);
// })

var db = {}
db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.UserModal = require('./UserModal')(sequelize,Sequelize);
db.ProductModal = require('./ProductsModal')(sequelize,Sequelize);
db.AddressModal = require('./Address')(sequelize,Sequelize)
db.OrderModal = require('./Orders')(sequelize,Sequelize)
db.CartModal = require('./Cart')(sequelize,Sequelize)
db.TrackModal = require('./Track')(sequelize,Sequelize)


module.exports = db;