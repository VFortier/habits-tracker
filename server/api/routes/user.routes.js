const userController = require("../controllers/user.controller");
const jwtService = require("../../services/jwt.service");

module.exports = function(app) {
  app.route('/user/signup')
    .post(userController.signup);

  app.route('/user/login')
    .post(userController.login);

  app.route('/user/dummyauth')
    .get(jwtService.verifyToken, userController.dummyAuthenticatedEndpoint);
};