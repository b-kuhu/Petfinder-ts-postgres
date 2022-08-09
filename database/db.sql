CREATE DATABASE restapi;

\l
\c restapi;

CREATE TABLE Animals(
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    breed VARCHAR(50)
);

ALTER SEQUENCE Animals_id_seq RESTART WITH 101 INCREMENT BY 1;

INSERT INTO Animals(name,breed)
      VALUES('tiger','labrador'),
            ('charlie','german shephard'),
            ('tom','pug');

SELECT * FROM Animals;  

CREATE TABLE Animals(
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    breed VARCHAR(50)
);

ALTER SEQUENCE Animals_id_seq RESTART WITH 101 INCREMENT BY 1;

INSERT INTO Animals(name,breed)
      VALUES('tiger','labrador'),
            ('charlie','german shephard'),
            ('tom','pug'),
            ('Leo','Siberian husky'),
            ('Chad','Poodle');

SELECT * FROM Animals; 

CREATE TABLE owners(
    owner_id SERIAL PRIMARY KEY,
    owner_name VARCHAR(30),
    contact VARCHAR(10),
    address VARCHAR(50)
);

ALTER SEQUENCE owners_owner_id_seq RESTART WITH 401 INCREMENT BY 1;
INSERT INTO owners(owner_name,contact,address)
 VALUES ('Tushar vij','9987654321','Ram Nagar'),
         ('Dev Verma','9810437642','kavi nagar'),
        ('Isha Sharma','7398728310','raj nagar'),
        ('Divyansh Bhatnagar','9928489242','gandhi nagar'),
        ('Manmeet Singh','7932983826','avantika');

SELECT * FROM owners;
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


 INSERT INTO shelter(animal_id,room_no,date_of_arrival, date_of_adoption,adopted_by_id)
 VALUES(101,301,'13-1-21','21-4-21',401),
       (102,302,'14-3-21','22-6-21',402),
       (103,303,'15-5-21','23-8-21',403),
       (104,304,'16-7-21','24-10-21',404),
       (105,305,'17-9-21','25-1-22',405);
       
SELECT * FROM shelter;  

