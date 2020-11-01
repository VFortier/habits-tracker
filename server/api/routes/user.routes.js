const userController = require('../controllers/user.controller');

module.exports = function(app) {
  app.route('/user/signup')
    .post(userController.signup);

  app.route('/user/login')
    .post(userController.login);
};