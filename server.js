const express=require('express');
const dotenv=require('dotenv');
const connectDB=require('./config/database');
const taskRoutes=require('./routes/taskRoutes');

dotenv.config();

connectedDB();//database connection

const app=express();

app.use(express.json());//middleware

app.use('/api/tasks',taskRoutes);//api routes

const PORT=process.env.PORT || 5000;//srvr port

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
})