--
-- Drop Tables
--

SET foreign_key_checks = 0;
DROP TABLE if exists myfavourites;
SET foreign_key_checks = 1;

--
-- Create Tables
--

CREATE TABLE myfavourites(
    id INT NOT NULL AUTO_INCREMENT,
    Plant_name VARCHAR(100) ,
    Username VARCHAR(100),
    Plant_id INT NOT NULL,
    PRIMARY KEY (id)
   );


