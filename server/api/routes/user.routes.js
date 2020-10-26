module.exports = function(app) {
  var userController = require('../controllers/user.controller');

  app.route('/user/:email')
    .get(userController.findUserByEmail);
};