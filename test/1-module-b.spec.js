if (global.describe) {
  var lab = {
    experiment: global.describe
  }
} else {
  var Lab = require('lab')
  var lab = exports.lab = Lab.script()
}
var td = require('testdouble')

var SomeClass, someClass, subject
lab.experiment('moduleB', function () {
  console.log('B')

  if (typeof beforeEach !== 'undefined') lab.beforeEach = beforeEach
  lab.beforeEach(function (done) {
    SomeClass = require('../lib/some-class')
    someClass = td.object(SomeClass)
    subject = require('../lib/module-b')
    done()
  })

  if (typeof it !== 'undefined') lab.test = it
  lab.test('calls method on SomeClass', function (done) {
    subject(someClass)

    td.verify(someClass.someMethod('hephey'))

    done()
  })

  if (typeof afterEach !== 'undefined') lab.afterEach = afterEach
  lab.afterEach(function (done) {
    td.reset()
    done()
  })
})
