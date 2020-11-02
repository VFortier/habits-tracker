const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const User = require("../models/user.model.js");
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

  User.findByEmail(email, (err, user) => {
    if (user != null) {
      res.status(400).send({
        message: `A user with the email '${email}' already exists`
      });
    } else {
      bcrypt.hash(pwd, authConfig.SALT_ROUNDS, (err, hash) => {
        User.add(email, hash, nickname, (err, user) => {
          if (err) {
            res.status(500).send({
              message: `Error signing up in User`
            });
          } else {
            res.send();
          }
        });
      })
    }
  });
};

exports.login = function(req, res) {
  User.findByEmail(req.body.email, (err, user) => {
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
      let pwdFromDB = user.password;

      bcrypt.compare(req.body.password, pwdFromDB, function(err, doesPwdMatch) {
        // TODO - Check for err
        console.log(authConfig);

        if (doesPwdMatch) {
          var token = jwt.sign({ id: user.id }, authConfig.SECRET_KEY, {
            expiresIn: 86400 // 24 hours
          });

          res.send({
            email: user.email,
            nickname: user.nickname,
            token: token,
          });
        } else {
          res.setHeader('WWW-Authenticate', `Wrong password for user with email ${req.body.email}`);
          res.status(401).send();
        }
      });
    }
  });
};

exports.dummyAuthenticatedEndpoint = function(req, res) {
  res.send({message: `You are authenticated with user id ${req.userId}`});
};