var mongoose = require('mongoose');

var asgnSchema = mongoose.Schema({
    courseName: {
        type: String,
        required: true
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
var Assignment = module.exports = mongoose.model('assignment', asgnSchema);

module.exports.get = function (callback, limit) {
    Assignment.find(callback).limit(limit);
}