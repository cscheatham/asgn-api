// Import assignment model
var Assignment = require('./asgn-model');

// Index action
exports.index = function (req, res) {
    Assignment.get(function(err, assignments) {
        if (err) {
            res.json(err);
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

// Retrieve assignment
exports.view = function (req, res) {
    Assignment.findById(req.params.assignment_id, function(err, assignment) {
        if (err) {
            res.json(err);
        }
        res.json({
            message: "Assignment found.",
            data: assignment
        })
    })
}

// Update assignments
exports.update = function (req, res) {
    Assignment.findById(req.params.assignment_id), function(err, assignment) {
        if (err) {
            res.send(err);
        }
        assignment.courseName = req.body.courseName;
        assignment.assignmentName = req.body.assignmentName;
        assignment.dueDate = req.body.dueDate;

        // Save the assignment back to the database
        assignment.save(function(err) {
            if (err) {
                res.json(err);
            }
            res.json({
                message: "Assignment updated.",
                data: assignment
            })
        })
    }
}

// Delete assignments

exports.delete = function (req, res) {
    Assignment.remove({
        _id: req.params.assignment_id
    }, function(err, assignment) {
        if (err) {
            res.json(err);
        }
        res.json({
            status: "Success",
            message: "Assignment deleted."
        })    
    })
}