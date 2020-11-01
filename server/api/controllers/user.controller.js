const User = require("../models/user.model.js");

exports.signup = function(req, res) {
  User.add(req.query.email, req.query.password, req.query.nickname, (err, data) => {
    if (err) {
      res.status(500).send({
        message: `Error signing up in User`
      });
    } else {
      console.log(data);
      res.send();
    }
  });
};

exports.login = function(req, res) {
  let hashedPwd = req.body.password;

  User.findByEmailAndPwd(req.body.email, hashedPwd, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.setHeader('WWW-Authenticate', 'Invalid credentials');
        res.status(401).send();
      } else {
        res.status(500).send({
          message: `Error logging in User with email ${req.body.email}.`
        });
      }
    } else {
      res.send();
    }
  });
};