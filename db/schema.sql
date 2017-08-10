CREATE DATABASE `burgers_db`;

USE `burgers_db`;

CREATE TABLE `burgers_db` . `burgers` (
    `id` INT(11) NOT NULL UNIQUE AUTO_INCREMENT, 
    `burger_name` VARCHAR(100) NOT NULL,
    `devoured` BOOLEAN default FALSE,
    `date` TIMESTAMP default 0,
    PRIMARY KEY (`id`)
)