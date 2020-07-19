-- Drops the burger_db if it exists currently
DROP DATABASE IF EXISTS burger_db;
--Created burger Db
CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burger (
    id int NOT NULL AUTO_INCREMENT,
    burger_name varchar(300) NOT NULL,
	devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);