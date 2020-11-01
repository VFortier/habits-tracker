module.exports = function(app) {
  var userController = require('../controllers/user.controller');

  app.route('/user/signup')
    .post(userController.signup);

  app.route('/user/login')
    .post(userController.login);
};