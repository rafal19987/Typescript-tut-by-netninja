var hello = function (name) {
    if (typeof name === 'string') {
        console.log("Hi ".concat(name));
    }
    else {
        console.log("Hi, ".concat(name, ". Your name is rly interesting :)"));
    }
};
hello(23);
