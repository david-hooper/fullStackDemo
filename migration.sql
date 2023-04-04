DROP TABLE IF EXISTS student;
CREATE TABLE student (
    id serial PRIMARY KEY,
    name varchar(25),
    github_Name varchar(25),
    email varchar(25)
);