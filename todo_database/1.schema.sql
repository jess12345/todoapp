-- SET search_path = todoapp_db;

CREATE TABLE tasks (
  id              SERIAL PRIMARY KEY,
  description     VARCHAR(1024) NOT NULL,
  status          VARCHAR(32) NOT NULL
);



