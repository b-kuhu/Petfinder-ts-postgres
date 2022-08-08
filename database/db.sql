CREATE DATABASE restapi;

\l
\c restapi;

CREATE TABLE Animals(
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    breed VARCHAR(50)
);

INSERT INTO Animals(name,breed)
      VALUES('tiger','labrador'),('charlie','german shephard');

SELECT * FROM Animals;      

CREATE TABLE owners(
    owner_id SERIAL PRIMARY KEY,
    owner_name VARCHAR(30),
    contact VARCHAR(10),
    address VARCHAR(50)
)

 CREATE TABLE shelter(
    id SERIAL PRIMARY KEY,
    animal_id INT,
    room_no INT,
    date_of_arrival DATE,
    date_of_adoption DATE,
    adopted_by_id INT,
    FOREIGN KEY(animal_id)
       REFERENCES Animals(id),
    FOREIGN KEY(adopted_by_id)
       REFERENCES owners(owner_id)   
);


