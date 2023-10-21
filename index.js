const express = require('express');
const cors = require('cors');
const app = express();

const taskRoutes = require('./routes/task.route');

app.use(express.json());
app.use(cors());
require('dotenv').config();

const dbConnect = require('./dbConnection')
dbConnect();
const PORT = process.env.PORT

//User Route
const UserRouter = require('./routes/user.route');
app.use('/user',UserRouter)

//Task Route
// app.use('/task',taskRoutes)


// middleware error handling
app.use('*',(err,req,res,next)=>{
    if(!err){
        next();
    }
    res.status(400).json({
        error : err.message
    })
})

app.listen(PORT,()=>{
console.log(`SERVER is RUNNING ON ${PORT}`);
})

