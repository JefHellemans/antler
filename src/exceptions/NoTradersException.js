function NoTradersException(message) {

    this.name = "NoTradersException";
    this.message = message;
    this.stack = (new Error()).stack;

}

NoTradersException.prototype = Object.create(Error.prototype);
NoTradersException.prototype.constructor = NoTradersException;