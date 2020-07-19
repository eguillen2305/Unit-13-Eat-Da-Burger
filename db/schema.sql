-- Drops the burger_db if it exists currently
DROP DATABASE IF EXISTS burger_db;
-- Creates the "cupcake_db" database
CREATE DATABASE burger_db;
-- specify that all of the following code will affect cupcake_db
USE burger_db;

CREATE TABLE burger (
    id int NOT NULL AUTO_INCREMENT,
    cupcake_name varchar(200) NOT NULL,
	devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);