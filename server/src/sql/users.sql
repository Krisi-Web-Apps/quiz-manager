CREATE TABLE IF NOT EXISTS `users` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(75) NOT NULL,
    `email` VARCHAR(75) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `city` VARCHAR(75) NOT NULL,
    `first_name` VARCHAR(75) NOT NULL,
    `last_name` VARCHAR(75) NOT NULL,
    `login_attempts` TINYINT(1) NOT NULL DEFAULT '0',
    PRIMARY KEY (`id`),
    UNIQUE `EMAIL_INDEX` (`email`)
) ENGINE = InnoDB;
