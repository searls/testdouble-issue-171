var Lab = require('lab')
var lab = exports.lab = Lab.script()
var td = require('testdouble')

var SomeClass, someClass, subject
lab.experiment('moduleB', function () {
  console.log('B')

  lab.beforeEach(function (done) {
    SomeClass = require('../lib/some-class')
    someClass = td.object(SomeClass)
    subject = require('../lib/module-b')
    done()
  })

  lab.test('calls method on SomeClass', function (done) {
    subject(someClass)

    td.verify(someClass.someMethod('hephey'))

    done()
  })

  lab.afterEach(function (done) {
    td.reset()
    done()
  })
})
