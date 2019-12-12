# Frontend - React

## Run
1. `cd todo_frontend`
2. `yarn start`

## Set up
- Create react app `yarn create react-app todo_frontend --typescript`
  - https://medium.com/@rossbulat/how-to-use-typescript-with-react-and-redux-a118b1e02b76
- Add bootstrap `npm install react-bootstrap bootstrap`
  - https://react-bootstrap.github.io/getting-started/introduction/



# Backend - Scala

## Run
1. `cd todo_backend`
2. `sbt`
3. `run`

## New scala app
```
sbt new scala/hello-world.g8
```

# Database - Postgres

## Run
1. Start server `pg_ctl -D /usr/local/var/postgres start`
2. Sign into database `psql todoapp_db -U todoapp`
3. Stop server `pg_ctl -D /usr/local/var/postgres stop`

## Set up postgres db
```
brew install postgresql
```
## Configure postgres
Using super user account to check and modify postgres settings
```sql
psql postgres
postgres=# \du
postgres=# \q
```
1. Create user
```
createuser todoapp --createdb
```
2. Create database
```sql
psql postgres -U todoapp
postgres=> CREATE DATABASE todoapp_db;
postgres=> GRANT ALL PRIVILEGES ON DATABASE todoapp_db TO todoapp; 
postgres=> \list 
postgres=> \connect todoapp_db
```
3. Create tables
```sql
psql todoapp_db -U todoapp
todoapp_db=> \d

CREATE TABLE tasks (
  id              SERIAL PRIMARY KEY,
  description     VARCHAR(1024) NOT NULL,
  status          VARCHAR(32) NOT NULL
);
```
## Connecting to the Database
Tutorial: `https://tpolecat.github.io/doobie/docs/03-Connecting.html`


# Http4s
[Tutorial](https://medium.com/@alandevlin7/http4s-v0-2-1d2d859d86c4)
1. `sbt run`
2. `curl -i http://localhost:9999/task`
3. ``


## Kill all processes on port
```
netstat -vanp tcp | grep 9999
lsof -i :9999
kill -15 <PID>
kill -9 <PID>
```