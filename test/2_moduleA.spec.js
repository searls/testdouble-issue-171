
const Lab = require('lab');
const lab = exports.lab = Lab.script();
const td = require('testdouble');

lab.experiment('moduleA', () => {
    console.log('A');

    let factory;
    let SomeClass;
    let someFunction;
    let moduleA;

    lab.beforeEach((done) => {
        factory = td.replace('../lib/factory');
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

        td.when(factory.get()).thenReturn({animal: 'dog'});

        moduleA.moduleA();

        td.verify(someFunction.someFunction(td.matchers.anything(), td.matchers.isA(SomeClass)), { times: 1 });

        done();
    });

});
