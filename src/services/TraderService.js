var TraderService = (function(){

    "use strict";

    return {

        get: function() {

            var xmlHttp = new XMLHttpRequest();
            xmlHttp.open("GET", config.localUrl, false);
            xmlHttp.send(null);

            if(xmlHttp.status === 200) {
                var data = JSON.parse(xmlHttp.responseText);
                var traders = [];

                for(var i = 0, l = data.traders.length; i < l; i++) {
                    var o = data.traders[i];
                    var positions = PositionService.getByTraderId(o.id);

                    var t = new Trader(
                        o.name,
                        positions
                    );

                    traders.push(t);
                }

                return traders;
            }

        },
        getById: function(id) {

            var xmlHttp = new XMLHttpRequest();
            xmlHttp.open("GET", config.localUrl, false);
            xmlHttp.send(null);

            if(xmlHttp.status === 200) {
                var data = JSON.parse(xmlHttp.responseText);
                var trader;

                for(var i = 0, l = data.traders.length; i < l; i++) {
                    var o = data.traders[i];
                    if(o.id === id) {
                        var positions = PositionService.getByTraderId(o.id);
                        return new Trader(
                            o.name,
                            positions
                        );
                    }
                }
            }

        }

    };

})();