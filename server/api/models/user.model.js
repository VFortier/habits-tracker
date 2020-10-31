const db = require("./db.js");

//TODO - All "require variable" should be constants
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

const User = function(user) {
  this.id = user.id;
  this.email = user.email;
  this.password = user.password;
  this.nickname = user.nickname;
};

User.add = (email, password, nickname, result) => {
  let escEmail = db.escape(email);
  let escPassword = db.escape(password);
  let escNickname = db.escape(nickname);

  let query = `
    INSERT INTO
    user (email, password, nickname)
    VALUES (${escEmail}, ${escPassword}, ${escNickname})
  `;

  db.query(query, (err, res) => {
    if (err) {
      console.log("Error: ", err);
      result(err);
      return;
    }

    result(null, res[0]);
  });
};

//TODO - Move some of this code to controller so our model is more "pure"
User.login = (email, password, result) => {
  //TODO - Properly hash password before comparing against the DB
  let encPassword = db.escape(password);
  let escEmail = db.escape(email);

  let query = `
    SELECT *
    FROM user
    WHERE email = "${escEmail}"
      AND password = "${encPassword}"
  `;

  db.query(query, (err, res) => {
    if (err) {
      console.log("Error: ", err);
      result(err);
      return;
    }

    if (res.length) {
      console.log("Authorized user: ", res[0]);
      result();
      return;
    }

    result({ kind: "unauthorized" });
  });
};

User.findByEmail = (email, result) => {
  let escEmail = db.escape(email);

  db.query(`SELECT * FROM user WHERE email = ${escEmail}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found user: ", res[0]);
      result(null, res[0]);
      return;
    }

    console.log(`user not found with email ${email}`);
    result({ kind: "not_found" }, null);
  });
};

module.exports = User;