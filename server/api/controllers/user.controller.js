const User = require("../models/user.model.js");

exports.signup = function(req, res) {
  let email    = req.body.email, 
      pwd      = req.body.password, 
      nickname = req.body.nickname;

  if (!email || !pwd || !nickname) {
    res.status(400).send({
      message: `Request body is missing one or more parameter(s)`
    });
    return;
  }

  User.findByEmail(email, (err, data) => {
    if (data != null) {
      res.status(400).send({
        message: `A user with the email '${email}' already exists`
      });
    } else {
      User.add(email, pwd, nickname, (err, data) => {
        if (err) {
          res.status(500).send({
            message: `Error signing up in User`
          });
        } else {
          console.log(data);
          res.send();
        }
      });
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