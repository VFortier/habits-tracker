DROP DATABASE IF EXISTS habits_tracker;

CREATE DATABASE habits_tracker;

USE habits_tracker;

CREATE TABLE goal_type (
	id           MEDIUMINT NOT NULL AUTO_INCREMENT,
	name         VARCHAR(40),
	description  VARCHAR(200),
    PRIMARY KEY (id)
);

