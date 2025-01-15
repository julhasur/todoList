const path=require('path');
const express=require('express');
const dotenv=require('dotenv');
const connectDB=require('./config/database');
const taskRoutes=require('./routes/taskRoutes');

dotenv.config();

connectDB();//database connection

const app=express();

app.use(express.json());//middleware

app.use('/api/tasks',taskRoutes);//api routes

app.use(express.static(path.join(__dirname, 'public')));//static files

// Root route
app.get("/", (req, res) => {
    res.send("Welcome to the Task Manager API!");
});

const PORT=process.env.PORT || 5000;//srvr port

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
})