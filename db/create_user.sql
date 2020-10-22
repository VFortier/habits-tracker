-- TODO: limit permissions for this user
-- TODO: remove hardcoded pwd

CREATE USER 'habits-tracker'@'localhost' IDENTIFIED BY 'c9025cc0fd86ff0';
GRANT ALL PRIVILEGES ON * . * TO 'habits-tracker'@'localhost';

-- TODO: This is a security downgrade to by-pass node's mysqljs package inability to handle MySQL 8 Auth method
-- See https://github.com/mysqljs/mysql/pull/2233 for updates
ALTER USER 'habits-tracker'@'localhost' IDENTIFIED WITH mysql_native_password BY 'c9025cc0fd86ff0';
flush privileges;