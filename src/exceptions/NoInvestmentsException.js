function NoInvestmentsException(message) {

    this.name = "NoInvestmentsException";
    this.message = message;
    this.stack = (new Error()).stack;

}

NoInvestmentsException.prototype = Object.create(Error.prototype);
NoInvestmentsException.prototype.constructor = NoInvestmentsException;