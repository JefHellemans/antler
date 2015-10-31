var UserService = (function(){

    "use strict";

    return {

        get: function() {

            var xmlHttp = new XMLHttpRequest();
            xmlHttp.open("GET", config.localUrl, false);
            xmlHttp.send(null);

            if(xmlHttp.status === 200) {
                var data = JSON.parse(xmlHttp.responseText);
                var investments = [];

                for(var i = 0, l = data.user.investments.length; i < l; i++) {
                    var o = data.user.investments[i];
                    var trader = TraderService.getById(o.traderId);

                    var investment = new Investment(
                        trader,
                        o.amount
                    );

                    investments.push(investment);
                }

                return new User(
                    data.user.name,
                    data.user.available,
                    investments
                );
            }

        }

    };

})();