var Lab = require('lab')
var lab = exports.lab = Lab.script()
var td = require('testdouble')

var SomeClass, someFunction, subject
lab.experiment('moduleA', function () {
  console.log('A')

  lab.beforeEach(function (done) {
    someFunction = td.replace('../lib/some-function')
    SomeClass = require('../lib/some-class')
    subject = require('../lib/module-a')
    done()
  })

  lab.test('calls someFunction with an instance of SomeClass', function (done) {
    subject()

    td.verify(someFunction(td.matchers.isA(SomeClass)), { times: 1 })

    done()
  })

  lab.afterEach(function (done) {
    td.reset()
    done()
  })
})
