const express=require('express');
const User=require('./model/user');

const app=express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.get('/test',(req,res,next) => {
    console.log("Response from express.js server");
});

app.post('/register',(req,res,next) => {
    console.log(req.body.name);
    const user=new User(req.body);
    console.log(user);
});

app.listen(5000);