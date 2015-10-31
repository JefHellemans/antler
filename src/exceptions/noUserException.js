function NoUserException(message) {

    this.name = "NoUserException";
    this.message = message;
    this.stack = (new Error()).stack;

}

NoUserException.prototype = Object.create(Error.prototype);
NoUserException.prototype.constructor = NoUserException;