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

// Export Assignment Model
var Assignment = module.exports = mongoose.model('assignment', assignmentSchema);

module.exports.get = function (callback, limit) {
    Assignment.find(callback).limit(limit);
}