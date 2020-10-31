const User = require("../models/user.model.js");

exports.login = function(req, res) {
  User.login(req.query.email, req.query.password, (err) => {
    if (err) {
      if (err.kind === "unauthorized") {
        res.setHeader('WWW-Authenticate', 'Invalid credentials');
        res.status(401).send();
      } else {
        res.status(500).send({
          message: `Error logging in User with email ${req.params.email}.`
        });
      }
    } else {
      res.send();
    }
  });
};

exports.findUserByEmail = function(req, res) {
  User.findByEmail(req.params.email, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found User with email ${req.params.email}.`
        });
      } else {
        res.status(500).send({
          message: `Error retrieving User with email ${req.params.email}.`
        });
      }
    } else {
      res.send(data);
    }
  });
};