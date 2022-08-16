const express=require('express');
const app=express();
const port=5000;

const userRouter=require('./routes/userRoute');
app.use(express.json());

app.use('/user',userRouter);

app.get('/home',(req,res)=>{
    res.send("Home Page ")
})


app.listen(port,()=>{
    console.log("Express Started");
    console.log("Express Server Started");
})