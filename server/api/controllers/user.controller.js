const User = require("../models/user.model.js");

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