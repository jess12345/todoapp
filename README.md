# Frontend - React

- Run
    1. `cd todo_frontend`
    2. `yarn start`

- Set up
  - Create react app `yarn create react-app todo_frontend --typescript`
    - https://medium.com/@rossbulat/how-to-use-typescript-with-react-and-redux-a118b1e02b76
  - Add bootstrap `npm install react-bootstrap bootstrap --save`
    - https://react-bootstrap.github.io/getting-started/introduction/
  - Add react router `npm install react-router-dom --save` `npm install @types/react-router-dom`
  - Add react router bootstrap `npm install react-router-bootstrap --save` `npm install @types/react-router-bootstrap`
  - Add redux `npm install redux --save`
    - https://redux.js.org/basics/basic-tutorial
  - Add react-redux `npm install react-redux --save` `npm install @types/react-redux`





# Backend - Scala

- Run
  1. `cd todo_backend`
  2. `sbt`
  3. `run`

- New scala app `sbt new scala/hello-world.g8`

-  Http4s
  [Tutorial](https://medium.com/@alandevlin7/http4s-v0-2-1d2d859d86c4)
  1. `sbt run`
  2. `curl -i http://localhost:9999/task`





# Database - Postgres

- Run
  1. Start server `pg_ctl -D /usr/local/var/postgres start`
  2. Sign into database `psql todoapp_db -U todoapp`
  3. Stop server `pg_ctl -D /usr/local/var/postgres stop`

- Set up postgres db `brew install postgresql`

- Configure postgres
  - Using super user account to check and modify postgres settings
    ```sql
    psql postgres
    postgres=# \du
    postgres=# \q
    ```
    1. Create user
    ```
    CREATE USER todoapp CREATEDB;
    ```
    1. Create database
    ```sql
    psql postgres -U todoapp
    postgres=> CREATE DATABASE todoapp_db;
    postgres=> GRANT ALL PRIVILEGES ON DATABASE todoapp_db TO todoapp; 
    postgres=> \list 
    postgres=> \connect todoapp_db
    ```
    1. Create tables
    ```sql
    psql todoapp_db -U todoapp
    todoapp_db=> \d

    CREATE TABLE tasks (
      id              SERIAL PRIMARY KEY,
      description     VARCHAR(1024) NOT NULL,
      status          VARCHAR(32) NOT NULL
    );
    ```
    1. Insert into database
    ```sql
    UPDATE public.tasks 
    SET description = 'this works :)' 
    WHERE "id" = 1
    ```

- Connecting to the Database
  - Tutorial: `https://tpolecat.github.io/doobie/docs/03-Connecting.html`


- Database Version Control: Flyway
  - https://flywaydb.org/documentation/commandline/





# Docker
https://medium.com/jeroen-rosenberg/lightweight-docker-containers-for-scala-apps-11b99cf1a666
https://www.scala-sbt.org/sbt-native-packager/formats/docker.html
https://medium.com/@yzhong.cs/getting-started-with-docker-scala-sbt-d91f8ac22f5f
https://blog.softwaremill.com/small-fast-docker-images-using-graalvms-native-image-99c0bc92e70b
https://www.freecodecamp.org/news/docker-simplified-96639a35ff36/

- Stop / remove all docker containers
  - `docker stop $(docker ps -a -q)`
  - `docker rm $(docker ps -a -q)`

- remove all docker images
  - `docker rmi $(docker images -a -q)`

- Scala Code
  - Building a docker image `sbt docker:publishLocal`
  - Running inside docker `docker run -p 9999:9999 todoapp:0.0.1`

- Database
  - Put in docker
    - https://hub.docker.com/_/postgres
      1. `docker run -it --rm --name todoapp -e POSTGRES_PASSWORD=pwd -d -p 5432:9990 postgres`
      2. `docker exec -it todoapp psql -U postgres` login as root user
      3. `CREATE USER todoapp CREATEDB;` semicolon is really important
      4. `docker exec -it todoapp psql postgres -U todoapp` change user
      5. create db
          ```sql
          postgres=> CREATE DATABASE todoapp_db;
          postgres=> GRANT ALL PRIVILEGES ON DATABASE todoapp_db TO todoapp; 
          postgres=> \list 
          postgres=> \connect todoapp_db
          ```
      6. create table
          ```sql
          CREATE TABLE tasks (
            id              SERIAL PRIMARY KEY,
            description     VARCHAR(1024) NOT NULL,
            status          VARCHAR(32) NOT NULL
          );
          ```
      7. insert data
          ```sql
          INSERT INTO tasks VALUES (1, 'first task', 'todo');
          INSERT INTO tasks VALUES (2, 'second task', 'done');
          INSERT INTO tasks VALUES (3, 'third task', 'todo');
          INSERT INTO tasks VALUES (4, 'forth task', 'done');
          INSERT INTO tasks VALUES (5, 'fifth task', 'todo');
          ```
    - create image from a container
        `docker commit f8e3e06b3ec1 todoapp/db:0.0.1`
    - run docker from newly created image
        `docker run -it --rm --name new_todoapp -e POSTGRES_PASSWORD=pwd -d todoapp/db:0.0.1 `
    - connect to database
        `docker exec -it todoapp  psql -U postgres`
    - exit a container
        `docker stop xxx`

  - Docker `run` flags
    - `-it` - running interactive processes such as shell
    - `-e` - set environment variables
    - `--rm` - container is removed when it exits

  - Build a Dockerfile
    1. `docker build -t todoapp/db:0.0.1  ./todo_database/`
    2. `docker run -it --rm --name todoapp -d -p 5432:9990 -e POSTGRES_PASSWORD=pwd todoapp/db:0.0.1`
    3. `docker exec -it todoapp psql todoapp_db -U todoapp`

## Kill all processes on port
```
netstat -vanp tcp | grep 9999
lsof -i :9999
kill -15 <PID>
kill -9 <PID>
```


# Postgres
- `\du` - list users
- `\l` - list databases
- `\c todoapp_db` - connect to todoapp_db
- `\d` - list tables and relations



# To Do
- [x] Create Http4s Scala project (API)
- [x] Create Database in Postgres (DB)
- [x] Create React app (UI)
- [x] Connect API to DB
- [ ] Connect UI to API
- [x] Put API in Docker
- [x] Put DB in Docker
- [ ] Put UI in Docker
- [ ] Connect Docker API to Docker DB
- [ ] Connect Docker UI to Docker API
- [ ] Spin up UI, API, DB in docker-compose locally
- [ ] Put UI, API, DB in AWS