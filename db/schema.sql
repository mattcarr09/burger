CREATE DATABASE burger_db;
USE burger_db;


CREATE TABLE burger (
  id int AUTO_INCREMENT,
  burger_name varchar(50) NOT NULL,
  devoured TINYINT(1) NOT NULL,
  date TIMESTAMP NOT NULL,
  PRIMARY KEY(id)
);

SET time_zone='+00:00';
