#!/bin/bash
set -e
POSTGRES="psql --username ${POSTGRES_USER}"


echo "Creating user: todoapp"
$POSTGRES <<EOSQL
CREATE USER todoapp CREATEDB;
EOSQL


echo "Creating database: todoapp_db"
$POSTGRES <<EOSQL
CREATE DATABASE todoapp_db OWNER todoapp;
EOSQL


echo "Creating schema..."
psql -d todoapp_db -a -U todoapp -f /1.schema.sql


echo "Populating database..."
psql -d todoapp_db -a -U todoapp -f /2.data.sql

