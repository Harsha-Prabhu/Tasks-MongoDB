const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    description:{
        required: true,
        type: 'string'
    },
    completed:{
        required: true,
        type: 'boolean'
    }
},{timestamps:true});



const Task = mongoose.model('Task',taskSchema);
module.exports = Task;