FROM postgres

# ENV POSTGRES_USER 'todoapp'
# ENV POSTGRES_PASSWORD ''
# ENV POSTGRES_DB 'todoapp_db'

COPY create_db.sh /docker-entrypoint-initdb.d/
COPY 1.schema.sql /
COPY 2.data.sql /

RUN chmod +x /docker-entrypoint-initdb.d/create_db.sh