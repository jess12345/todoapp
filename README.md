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

- Http4s
  [Tutorial](https://medium.com/@alandevlin7/http4s-v0-2-1d2d859d86c4)
  1. `sbt run`
  2. `curl -i http://localhost:9999/task`

- Commands:
  - `sbt compile`
  - `sbt run`
  - `sbt package` - create JAR file that can be run using sbt
    - `jar tvf target/scala-2.12/todoapp-api_2.12-0.0.1.jar` - check what's in the jar file
    - `sbt run target/scala-2.12/todoapp-api_2.12-0.0.1` - run the jar file using sbt
  - `sbt assembly` - use sbt-assembly to assembly full jar file that can be run by java
    - `java -jar target/scala-2.12/todoapp-api-assembly.jar`


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

- Commands
  - Stop / remove all docker containers
    - `docker stop $(docker ps -a -q)`
    - `docker rm $(docker ps -a -q)`
  - remove all docker images
    - `docker rmi $(docker images -a -q)`
  - Docker `run` flags
    - `-it` - running interactive processes such as shell
    - `-e` - set environment variables
    - `--rm` - container is removed when it exits

- Scala Code
  1. Change directory `j todo_backend`
  2. Build JAR file `sbt assembly`
  3. Build docker image `docker build -t todoapp-api:0.0.1 .`
  4. Run container from image `docker run --rm -p 9999:9999 todoapp-api:0.0.1`
  5. Connect to api `curl -i http://localhost:9999/task`

- Database
  1. Change directory `j todo_database`
  2. Build docker image `docker build -t todoapp-db:0.0.1 .`
  3. Run container from image `docker run -it --rm --name todoapp-db -d -p 5432:9990 -e POSTGRES_PASSWORD=pwd todoapp-db:0.0.1`
  4. Connect to database in container `docker exec -it todoapp-db psql todoapp_db -U todoapp`

  - Check can connect to db in docker:
    - check database is running `docker exec -it todoapp-db bash`
    - login to postgres `psql todoapp_db -U todoapp`
    - run query `select * from tasks;`
    - open postgresql.conf
      - check location `psql -U postgres -c 'SHOW config_file'`
      - open `/var/lib/postgresql/data/postgresql.conf`
  - Check can connect to db from host machine
    - `psql -h localhost -p 9990 -U todoapp -d todoapp_db -W`

- React App
  1. Change directory `j todo_frontend`
  2. Build production build `yarn build`
  3. Build docker image from production build `docker build -t todoapp-ui:0.0.1 .`
  4. Run container from image `docker run --rm -p 8000:80 todoapp-ui:0.0.1`
  5. Connect to web app in browser `http://localhost:8000/tasks`


## Docker Compose
start everything on the same network: `docker-compose up -d`

Debugging:
  - connect to Postgres: `psql -h localhost -p 5432 -U todoapp -d todoapp_db -W`
  - connect to Docker container: `docker exec -it container_name bash`

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
- [x] Put UI in Docker
- [x] Put API in docker-compose
- [x] Put DB in docker-compose
- [x] Put UI in docker-compose
- [ ] Connect Docker API to Docker DB
- [ ] Connect Docker UI to Docker API
- [ ] Spin up UI, API, DB in docker-compose locally
- [ ] Put UI, API, DB in AWS





CDN
- host file


aws lab account


react hook