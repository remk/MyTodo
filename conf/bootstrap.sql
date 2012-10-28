create database todo;



CREATE TABLE task
(
  task_txt character varying NOT NULL,
  id serial NOT NULL,
  CONSTRAINT task_pkey PRIMARY KEY (id)
);



