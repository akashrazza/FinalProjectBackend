const Address = require('../Modal/Address');

module.exports = app =>{
    var UserController = require('../Controller/userController');
    var route = require('express').Router()
    route.get('/getAll',UserController.GetALL);
    route.get('/getById',UserController.GetUserById);
    route.get('/getByName',UserController.GetUserByName);
    route.delete('deleteuser/:id',UserController.DeleteUser);
    route.get('/login',UserController.Login);
    route.post('/signup',UserController.Insert);
    route.get('/varifyuser',UserController.VerifyCredentials);
    route.put('/setpassword/:id',UserController.UpdatePassword);


    var ProductController = require('../Controller/productController')
    route.post('/insertproduct',ProductController.Insert);
    route.get('/getAllProduct',ProductController.GetAll);
    route.get('/getById/:id',ProductController.GetById);
    route.get('/getByType',ProductController.GetByType);
    route.get('/getByCategory',ProductController.GetByCategory);
    route.get('/getByProductName',ProductController.GetByName);

    var PaymentController = require('../Controller/PaymentController')
    route.post('/payment',PaymentController.PaymentConfirm)

    var AddressController = require('../Controller/AddressController');
    route.post('/address',AddressController.InsertAddress)
    route.get('/addressByUser/:id',AddressController.GetAddressByUser)
    route.delete('/address/:id',AddressController.DeleteAddress)
    route.get('/addressById/:id',AddressController.GetAddressById)

    var OrderController = require('../Controller/OrderController')
    route.post('/createOrder',OrderController.CreateOrder)
    route.delete('/deleteOrder/:id',OrderController.DeleteOrder)
    route.get('/getAllOrder/:id',OrderController.GetOrderByUser)
    route.get('/getAllOrder',OrderController.GetAllOrder)

    var CartController = require('../Controller/CartController');
    route.post('/cart',CartController.InsertModal);
    route.get('/cart/:id',CartController.GetALlByUser);
    route.get('/Cartuantity/:id',CartController.Countre);
    route.delete('/cart/:id',CartController.DeleteItem);

    var TrackController = require('../Controller/TrackController');
    route.get('/track/:id',TrackController.GetTrack);
    route.post('/track',TrackController.CreateTrack);
    route.delete('/track/:id',TrackController.DeleteTrack);
    route.put('/track/:id',TrackController.UpdateTrack);
    
    app.use('/user',route);
}