const express =require('express');
const app =express();
const cors =require('cors');
const userRoute = require('./Router/UserRoute');
const authRoute = require('./Router/AuthRoute');
const mongoose = require('mongoose');
const connectDb =require('./Services/ConnectDBService');



const port = 5000;

//middleware apply

app.use(cors());
// connect DB
connectDb();
// mongoose.connect('mongodb://127.0.0.1:27017/mern_auth')
//     .then(function(){
//         console.log('succes');
//     })
//     .catch(function(error){
//         console.log('fail',error);

//     })


//middleware router 
app.use('/users',userRoute);
// app.use('/api/auth',authRoute);

//api/auth/register
//api/auth/login

//router for app
// app.get('/', function(req,res){
//     res.send('hello word');
// });

// app.get('/api/auth/login', function(req,res){
//     res.send('login');
// });

// app.get('/api/auth/register', function(req,res){
//     res.send('register');
// });
app.listen(port, function(){
    console.log(`server is runing ${port}`);
});
