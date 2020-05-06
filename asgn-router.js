// Initialize express router
let router = require("express").Router();
let controller = require('./asgn-controller');

// Assignment routes

router.route('/')
    .get(controller.index)
    .post(controller.new);

router.route('/:assignment_id')
    .get(controller.view)
    .patch(controller.update)
    .put(controller.update)
    .delete(controller.delete);

module.exports = router;