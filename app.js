const mongoose = require('mongoose');
const express = require('express');
const app = express();
const Task = require('./modules/tasks');

const dbURL = 'mongodb+srv://Harsha:test123@cluster0.qixkm.mongodb.net/LearningDB?retryWrites=true&w=majority';

mongoose.connect(dbURL).then((result)=> {app.listen(3000);
    console.log('connected to db')}).catch((err)=> console.log('error connecting to DB'));


app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    
    Task.find().then((result)=>{
        res.render('tasks', { title : "Tasks",tasks : result})
    }).catch(err=> {console.log(err)});
})