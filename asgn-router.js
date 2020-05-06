// Initialize express router
let router = require("express").Router();
let controller = require('./asgn-controller');

// Assignment routes

router.route('/asgn-api')
    .get(controller.index)
    .post(controller.new);

router.route('/asgn-api/:assignment_id')
    .get(controller.view)
    .patch(controller.update)
    .put(controller.update)
    .delete(controller.delete);