module.exports = function(app) {
  var userController = require('../controllers/user.controller');

  app.route('/user/login')
    .post(userController.login);

  app.route('/user/:email')
    .get(userController.findUserByEmail);
};