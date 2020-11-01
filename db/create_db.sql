DROP DATABASE IF EXISTS habits_tracker;

CREATE DATABASE habits_tracker;

USE habits_tracker;

CREATE TABLE goal_type (
	id           MEDIUMINT NOT NULL AUTO_INCREMENT,
	name         VARCHAR(40)  NOT NULL,
	description  VARCHAR(200),
    PRIMARY KEY (id)
);

CREATE TABLE user (
	id            MEDIUMINT NOT NULL AUTO_INCREMENT,
	email         VARCHAR(254)  NOT NULL UNIQUE,
	password      VARCHAR(256)  NOT NULL,
	nickname      VARCHAR(40)  NOT NULL,
    PRIMARY KEY (id)
);