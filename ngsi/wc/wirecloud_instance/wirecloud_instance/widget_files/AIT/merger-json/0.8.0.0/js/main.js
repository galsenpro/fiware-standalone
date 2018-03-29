/*global MashupPlatform*/

if (typeof MashupPlatform !== 'undefined') {
    // two objects will be concatenated and sent off
    var a = {};
    var b = {};

    function push() {
        MashupPlatform.wiring.pushEvent('output', extend(a,b));
    }

    function extend(obj, src) {
        for (var key in src) {
            if (src.hasOwnProperty(key))
              obj[key] = src[key];
        }
        return obj;
    }


    MashupPlatform.wiring.registerCallback('a_in', function (data) {
        try {
            if ((typeof data) === "string") {
              a = JSON.parse(data);
            } else {
              a = data;
            }
            push();
        } catch(e) {
            console.error(e);
        }
    });

    MashupPlatform.wiring.registerCallback('b_in', function (data) {
        try {
          if ((typeof data) === "string") {
            b = JSON.parse(data);
          } else {
            b = data;
          }
            push();
        } catch(e) {
            console.error(e);
        }
    });
}
