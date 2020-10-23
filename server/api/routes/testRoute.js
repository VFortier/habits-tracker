'use strict';

module.exports = function(app) {
  var testController = require('../controllers/testController');

  app.route('/goaltypes')
    .get(testController.listGoalTypes);
};