
const SomeClass = require('./SomeClass').SomeClass;
const factory = require('./factory');
const someFunction = require('./someFunction');

function moduleA() {
    const instanceOfSomeClass = new SomeClass();
    const obj = factory.get();

    someFunction.someFunction(obj, instanceOfSomeClass);

    return instanceOfSomeClass;
}

exports.moduleA = moduleA;
