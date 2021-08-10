const express=require('express');
const userRoute=require('./routes/user_routes');
const app=express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.get('/test',(req,res,next) => {
    console.log("Response from express.js server");
});

app.use('/authenticate',userRoute);




app.listen(5000);

// 1. app.js => routes => controller