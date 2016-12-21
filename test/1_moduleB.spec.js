
const Lab = require('lab');
const lab = exports.lab = Lab.script();
const td = require('testdouble');


lab.experiment('moduleB', () => {
    console.log('B');

    let SomeClass;
    let someClass = null;
    let moduleB;

    lab.beforeEach((done) => {
        SomeClass = require('../lib/SomeClass').SomeClass;
        someClass = td.object(SomeClass);

        moduleB = require('../lib/moduleB');
        done();
    });

    lab.afterEach((done) => {
        td.reset();
        done();
    });

    lab.test('calls method on SomeClass', (done) => {

        moduleB.moduleB(someClass);

        td.verify(someClass.someMethod('hephey'));

        done();
    });

});
