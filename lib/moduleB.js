/**
 * @param instanceOfSomeClass {SomeClass}
 */
function moduleB(instanceOfSomeClass) {
    instanceOfSomeClass.someMethod('hephey');
}

exports.moduleB = moduleB;
