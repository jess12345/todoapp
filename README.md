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

- Scala Code
  - Building a docker image `sbt docker:publishLocal`
  - Running inside docker `docker run -p 9999:9999 todoapp:0.0.1`

- Database
  - Put in docker
    - https://hub.docker.com/_/postgres
      1. `docker pull postgres`
      2. `docker run --name some-postgres -e POSTGRES_PASSWORD=mysecretpassword -d postgres`
      3. 





## Kill all processes on port
```
netstat -vanp tcp | grep 9999
lsof -i :9999
kill -15 <PID>
kill -9 <PID>
```
