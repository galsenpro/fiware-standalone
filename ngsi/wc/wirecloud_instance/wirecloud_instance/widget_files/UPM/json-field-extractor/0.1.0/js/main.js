/*
 * json-field-extractor
 * https://github.com/mjimenez/json-field-extractor-operator
 *
 * Copyright (c) 2017 UPM
 * Licensed under the AGPLv3 license.
 */

(function () {

    "use strict";


    var ojbListCallback = function ojbListCallback(data) {
        // Generates a list of values pointed by user preference
        pushData(toValueSerie(data));
    };

    var index = function index(obj,i) {return obj[i]};

    var toValueSerie = function toValueSerie(objects) {
        var path = MashupPlatform.prefs.get('field-path');
        var dataSerie = [];
        var value;

        if (typeof(objects) !== 'undefined') {
            objects.forEach(function (data) {
                try {
                    value = path.split('.').reduce(index, data);
                    value = (value == undefined ? null : value);
                    dataSerie.push(value);
                } catch (exception) {
                    MashupPlatform.operator.log("Cannot access property " + path + " of element " + JSON.stringify(data));
                }
            });
        }
        return dataSerie;
    };

    // Push current data
    var pushData = function pushData(data) {
        MashupPlatform.wiring.pushEvent("label-list", data);
    };

    MashupPlatform.wiring.registerCallback("object-list", ojbListCallback);


})();
