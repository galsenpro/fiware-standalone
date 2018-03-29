/*
 * Copyright 2015 Telefonica Investigación y Desarrollo, S.A.U
 *
 * This file is part of iotagent-mqtt
 *
 * iotagent-mqtt is free software: you can redistribute it and/or
 * modify it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the License,
 * or (at your option) any later version.
 *
 * iotagent-mqtt is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public
 * License along with iotagent-mqtt.
 * If not, seehttp://www.gnu.org/licenses/.
 *
 * For those usages not covered by the GNU Affero General Public License
 * please contact with::[contacto@tid.es]
 */
var config = {};

config.mqtt = {
    host: 'mosquitto',
    port: 8083
};

config.http = {
    port: 7896
};

config.iota = {
    logLevel: 'DEBUG',
    timestamp: true,
    contextBroker: {
        host: 'orion',
        port: '1026'
    },
    server: {
        port: 4041
    },
    deviceRegistry: {
        type: 'mongodb'
    },
    mongodb: {
        host: 'mongo',
        port: '27017',
        db: 'iotagent'
    },
    types: {
    //   "thing": {
    //     service: 'testservice',
    //     subservice: '/testalain',
    //     "attributes": [
    //       {
    //         "name": "status",
    //         "type": "string",
    //         "object_id": "s"
    //     },
    //     {
    //         "name": "temperature",
    //         "type": "float",
    //         "object_id": "t"
    //     },
    //     {
    //         "name": "humidity",
    //         "type": "float",
    //         "object_id": "h"
    //     }
    //   ]
    // }
    },
    //service: 'testservice',
    //subservice: '/testalain',
    providerUrl: 'http://localhost:4041',
    deviceRegistrationDuration: 'P1Y'
    //defaultType: 'thing'

};

//config.defaultKey = 'TEF';

module.exports = config;
