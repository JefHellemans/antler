var PositionService = (function(){

    "use strict";

    return {

        get: function() {

            var xmlHttp = new XMLHttpRequest();
            xmlHttp.open("GET", config.localUrl, false);
            xmlHttp.send(null);

            if(xmlHttp.status === 200) {
                var data = JSON.parse(xmlHttp.responseText);
                var positions = [];

                for(var i = 0, l = data.positions.length; i < l; i++) {
                    var o = data.positions[i];

                    var position = new Position(
                        o.traderId,
                        o.datetime,
                        o.stock,
                        o.price,
                        o.short,
                        o.percentage
                    );

                    positions.push(position);
                }

                return positions;
            }

        },
        getByTraderId: function(traderId) {

            var xmlHttp = new XMLHttpRequest();
            xmlHttp.open("GET", config.localUrl, false);
            xmlHttp.send(null);

            if(xmlHttp.status === 200) {
                var data = JSON.parse(xmlHttp.responseText);
                var positions = [];

                for(var i = 0, l = data.positions.length; i < l; i++) {
                    var o = data.positions[i];

                    if(o.traderId === traderId) {
                        var position = new Position(
                            o.traderId,
                            o.datetime,
                            o.stock,
                            o.price,
                            o.short,
                            o.percentage
                        );

                        positions.push(position);
                    }
                }

                return positions;
            }

        }

    };

})();