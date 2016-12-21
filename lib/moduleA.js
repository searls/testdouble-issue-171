
const SomeClass = require('./SomeClass').SomeClass;
const someFunction = require('./someFunction');

function moduleA() {
    const instanceOfSomeClass = new SomeClass();

    someFunction.someFunction(instanceOfSomeClass);

    return instanceOfSomeClass;
}

exports.moduleA = moduleA;
