FROM ubuntu:14.04

MAINTAINER FIWARE Indentity Manager Team. DIT-UPM

ENV HOME=/
ENV IDM_PASS=idm

# Install Ubuntu dependencies
RUN sudo apt-get update && \
    sudo apt-get install -y wget python git vim expect && \
    wget https://bootstrap.pypa.io/get-pip.py && \
    sudo python get-pip.py

# Install Ubuntu project dependencies
RUN sudo apt-get install -y python-dev python-virtualenv libssl-dev libffi-dev libjpeg8-dev libxml2-dev libxslt1-dev libsasl2-dev libssl-dev libldap2-dev libffi-dev libsqlite3-dev libmysqlclient-dev python-mysqldb python-psycopg2

# Download latest version of the code
RUN git clone https://github.com/agaldemas/keystone && \
    cd keystone && \
    git checkout master

# Configuring settings files : no need we have an external
# RUN cp keystone/etc/keystone.conf.sample keystone/etc/keystone.conf

# Install python dependecies
RUN sudo python keystone/tools/install_venv.py

# added for PgSQL support
COPY keystone.conf keystone/etc/keystone.conf

WORKDIR keystone

# Sync database
# do not call at this time if you need to use an external database
# RUN sudo tools/with_venv.sh bin/keystone-manage db_sync && \
#    sudo tools/with_venv.sh bin/keystone-manage db_sync --extension=endpoint_filter && \
#    sudo tools/with_venv.sh bin/keystone-manage db_sync --extension=oauth2 && \
#    sudo tools/with_venv.sh bin/keystone-manage db_sync --extension=roles && \
#    sudo tools/with_venv.sh bin/keystone-manage db_sync --extension=user_registration && \
#    sudo tools/with_venv.sh bin/keystone-manage db_sync --extension=two_factor_auth

# Prepare to set up idm password
COPY expect_idm_password .
COPY db-sync.sh .
RUN sed -i s/\$\$IDM_PASS/${IDM_PASS}/g expect_idm_password && \
    chmod +x expect_idm_password && \
    chmod +x db-sync.sh
#    && \
#    sudo ./expect_idm_password


# Mount volumes to grant access from host
# VOLUME /keystone/
# VOLUME /Users/alaing/Documents/FIWARE/NGSI/keystone/

### Exposed ports
# - Keystone
EXPOSE 5000
# - keystone admin
EXPOSE 35357
# synchronize database when container start and populate and set an initial password
CMD sudo ./db-sync.sh & sudo ./expect_idm_password & sudo /keystone/tools/with_venv.sh /keystone/bin/keystone-all -v
