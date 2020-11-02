const db = require("./db.js");

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

User.findByEmail = (email, result) => {
  let escEmail = db.escape(email);

  db.query(`SELECT * FROM user WHERE email = ${escEmail}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      result(null, res[0]);
      return;
    }

    console.log(`user not found with email ${email}`);
    result({ kind: "not_found" }, null);
  });
};

module.exports = User;