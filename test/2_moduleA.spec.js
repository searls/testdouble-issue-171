
const Lab = require('lab');
const lab = exports.lab = Lab.script();
const td = require('testdouble');

lab.experiment('moduleA', () => {
    console.log('A');

    let SomeClass;
    let someFunction;
    let moduleA;

    lab.beforeEach((done) => {
        someFunction = td.replace('../lib/someFunction');
        SomeClass = require('../lib/SomeClass').SomeClass;

        moduleA = require('../lib/moduleA');

        done();
    });


    lab.afterEach((done) => {
        td.reset();
        done();
    });


    lab.test('calls someFunction with an instance of SomeClass', (done) => {

        moduleA.moduleA();

        td.verify(someFunction.someFunction(td.matchers.isA(SomeClass)), { times: 1 });

        done();
    });

});
