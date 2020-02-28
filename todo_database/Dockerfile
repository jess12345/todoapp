FROM postgres

# ENV POSTGRES_USER 'todoapp'
# ENV POSTGRES_PASSWORD ''
# ENV POSTGRES_DB 'todoapp_db'

COPY 1.create_db.sql /docker-entrypoint-initdb.d/
COPY 2.schema.sql /docker-entrypoint-initdb.d/
COPY 3.data.sql /docker-entrypoint-initdb.d/
