/*
 * Copyright (c) 2013-2016 CoNWeT Lab., Universidad Politécnica de Madrid
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* globals MashupPlatform */

(function () {

    "use strict";

    var mp = MashupPlatform;

    var JsonSource = function JsonSource() {
        mp.wiring.registerCallback("command", function (command) {
            requestData();
        });

        requestData();
    };

    var requestData = function requestData() {

        var file_url = new URL(mp.prefs.get('json_file'));

        var request_headers = {};
        request_headers['Accept'] = 'application/json';

        mp.http.makeRequest(file_url, {
            method: "GET",
            requestHeaders: request_headers,
            parameters: {
                // lastN: HLIMIT,
                // dateFrom: from.toISOString()/* ,
                // dateTo: to.toISOString()*/
            },
            onSuccess: function (response) {
                if (response.status !== 200) {
                    throw new Error('request failed return http code: ' + response.status);
                }
                // console.log("got response: %o", response);

                mp.wiring.pushEvent("json_out", response.response);
            },
            onFailure: function (response) {
                throw new Error('Unexpected response from server');
            },
            onException: function (reason) {
                mp.operator.log(reason);
            }
        });
    };

    new JsonSource();

})(MashupPlatform);
