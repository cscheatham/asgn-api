var mongoose = require('mongoose');

var schema = mongoose.Schema({
    courseName: {
        type: String,
    },
    assignmentName: {
        type: String,
        required: true
    },
    dueDate: {
        type: Date,
    }
})