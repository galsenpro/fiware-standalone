#!/bin/bash

# Sync database
sudo tools/with_venv.sh bin/keystone-manage db_sync && \
sudo tools/with_venv.sh bin/keystone-manage db_sync --extension=endpoint_filter && \
sudo tools/with_venv.sh bin/keystone-manage db_sync --extension=oauth2 && \
sudo tools/with_venv.sh bin/keystone-manage db_sync --extension=roles && \
sudo tools/with_venv.sh bin/keystone-manage db_sync --extension=user_registration && \
sudo tools/with_venv.sh bin/keystone-manage db_sync --extension=two_factor_auth
