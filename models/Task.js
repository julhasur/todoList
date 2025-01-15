const mongoose= require('mongoose');
console.log("task moooodelssss looooding");
const taskSchema=new mongoose.Schema({
    title: {
        type: String,
        required:[`Title is required`],//msut require title
    },
    description: {
        type: String,
    },
    status: {
        type: String,
        enum: ['pending', 'in-progress', 'completed'],
        default: 'pending'
    },
    dueDate:{
        type: Date,
    },
     createdAt: {
        type: Date,
        default: Date.now//current date
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    }
});

module.exports=mongoose.model('Task',taskSchema);