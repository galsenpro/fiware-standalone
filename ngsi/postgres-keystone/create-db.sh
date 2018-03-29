# to create database in postgres container
sudo su - postgres
psql
CREATE USER keystone;
ALTER USER keystone WITH PASSWORD 'keystone';
CREATE DATABASE keystone;
GRANT ALL PRIVILEGES ON DATABASE keystone TO keystone;
\q
exit

# to create tables (to execute in container)
sudo tools/with_venv.sh bin/keystone-manage db_sync && \
sudo tools/with_venv.sh bin/keystone-manage db_sync --extension=endpoint_filter && \
sudo tools/with_venv.sh bin/keystone-manage db_sync --extension=oauth2 && \
sudo tools/with_venv.sh bin/keystone-manage db_sync --extension=roles && \
sudo tools/with_venv.sh bin/keystone-manage db_sync --extension=user_registration && \
sudo tools/with_venv.sh bin/keystone-manage db_sync --extension=two_factor_auth
