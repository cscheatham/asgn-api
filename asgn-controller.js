// Import assignment model
var Assignment = require('./asgn-model');

// Index action
exports.index = function (req, res) {
    Assignment.get(function(err, assignments) {
        if (err) {
            res.json(err)
        }
        res.json({
            status: "success",
            message: "Assignments retrieved successfully.",
            data: assignments
        })
    })
}

// Create new assignments
exports.new = function (req, res) {
    var assignment = new Assignment();
    assignment.courseName = req.body.courseName;
    assignment.assignmentName = req.body.assignmentName;
    assignment.dueDate = req.body.dueDate;

    // Save assignment and check for errors
    assignment.save(function(err) {
        if (err) {
            res.json(err);
        }
        res.json({
            message: "Assignment created.",
            data: assignment
        })
    })
}