const express = require('express');
const UserRouter =  express.Router();
const {register,login,authChek}= require('../controllers/user.controller')
const {jwtVerify,isAdmin} = require('../middleware/jwt.middleware')

//User Registration api
UserRouter.post('/register',register);

//User or admin login api
UserRouter.post('/login',login);

//check auth 
UserRouter.get('/authUser',jwtVerify,isAdmin,authChek)

module.exports = UserRouter;