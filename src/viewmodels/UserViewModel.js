var UserViewModel = {

    user: null,
    render: function(elementSelector) {

        if(!this.user || typeof(this.user) !== "object") {
            throw new NoUserException("No user set");
        }

        var element = document.querySelector(elementSelector);

        var bob = "<section class='img'></section>";
        bob += "<h2>" + this.user.name + "</h2>";
        bob += "<h3>&euro; " + formatMoney(this.user.available) + "</h3>";

        var invested = 0;
        var instock = 0;
        var bobette = "";
        for(var i = 0, l = this.user.investments.length; i < l; i++) {
            var o = this.user.investments[i];
            invested += o.amount;
            bobette += "<trader-profile><section class='img'></section>";
            bobette += "<h2>" + o.trader.name + "</h2>";
            bobette += "<h3>&euro; " + formatMoney(o.amount) + "</h3>";
            bobette += "<dl>";
            var stock = 0;
            for(var j = 0, m = o.trader.positions.length; j < m; j++) {
                var p = o.trader.positions[j];
                stock += p.percentage;
            }
            instock += o.amount / 100 * stock;
            bobette += "<dt>Uninvested:</dt><dd><span>&euro;</span>" + formatMoney(o.amount / 100 * (100 - stock)) + "</dd>";
            bobette += "<dt>Invested:</dt><dd><span>&euro;</span>" + formatMoney(o.amount / 100 * stock) + "</dd>";
            bobette += "</trader-profile>";
        }

        bob += "<dl>";
        bob += "<dt>Available:</dt><dd><span>&euro;</span>" + formatMoney(this.user.available - invested) + "</dd>";
        bob += "<dt>Uninvested:</dt><dd><span>&euro;</span>" + formatMoney(this.user.available - (this.user.available - invested) - instock) + "</dd>";
        bob += "<dt>Invested:</dt><dd><span>&euro;</span>" + formatMoney(instock) + "</dd>";
        bob += "</dl>";

        element.innerHTML = bob + bobette;

    }

};