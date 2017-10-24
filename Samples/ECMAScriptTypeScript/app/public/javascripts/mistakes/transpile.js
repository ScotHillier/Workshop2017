System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function loadMe() {
        var greetings = ["Happy", "Have a good", "It's"];
        var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday",
            "Thursday", "Friday", "Saturday"];
        var greeting = greetings[Math.floor(Math.random * greetings.length)];
        var todayIs = weekdays[Date().getDay()];
        document.getElementByID('elt1').innerHTML =
            greeting + " " + todayIs + "!";
    }
    exports_1("loadMe", loadMe);
    return {
        setters: [],
        execute: function () {
        }
    };
});
//# sourceMappingURL=transpile.js.map