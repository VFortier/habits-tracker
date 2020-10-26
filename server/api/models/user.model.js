const db = require("./db.js");

const User = function(user) {
  this.id = user.id;
  this.email = user.email;
  this.password = user.password;
  this.nickname = user.nickname;
};

User.findByEmail = (email, result) => {
  db.query(`SELECT * FROM user WHERE email = "${email}"`, (err, res) => {
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

    result({ kind: "not_found" }, null);
  });
};

module.exports = User;