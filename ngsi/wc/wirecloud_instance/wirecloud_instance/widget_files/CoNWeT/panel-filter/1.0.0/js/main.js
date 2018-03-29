/*
 * Copyright (c) 2015-2017 CoNWeT Lab., Universidad Politécnica de Madrid
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

/* global MashupPlatform*/

(function () {

    "use strict";

    MashupPlatform.wiring.registerCallback("entityInput", function (entityString) {
        var initial_data = JSON.parse(entityString);
        var value = initial_data[MashupPlatform.prefs.get('attr')];
        if (typeof value === "string") {
            var parsed_value = Number(value);
            if (!isNaN(parsed_value)) {
                value = parsed_value;
            }
        }

        var new_data = {
            value: value,
            unit: MashupPlatform.prefs.get('units')
        };
        MashupPlatform.wiring.pushEvent("entityOutput", JSON.stringify(new_data));
    });

})();
