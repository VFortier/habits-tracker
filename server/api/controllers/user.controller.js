const User   = require("../models/user.model.js");
const jwt    = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const authConfig = require("../../config/auth.config");

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
      bcrypt.hash(pwd, authConfig.SALT_ROUNDS, (err, hash) => {
        User.add(email, hash, nickname, (err, data) => {
          if (err) {
            res.status(500).send({
              message: `Error signing up in User`
            });
          } else {
            console.log(data);
            res.send();
          }
        });
      })
    }
  });
};

exports.login = function(req, res) {
  User.findByEmail(req.body.email, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.setHeader('WWW-Authenticate', `No existing user with email ${req.body.email}`);
        res.status(401).send();
      } else {
        res.status(500).send({
          message: `Error logging in User with email ${req.body.email}.`
        });
      }
    } else {
      let pwdFromDB = data.password;

      bcrypt.compare(req.body.password, pwdFromDB, function(err, result) {
        // TODO - Check for err

        if (result) {
          res.send();
        } else {
          res.setHeader('WWW-Authenticate', `Wrong password for user with email ${req.body.email}`);
          res.status(401).send();
        }
      });
    }
  });
};