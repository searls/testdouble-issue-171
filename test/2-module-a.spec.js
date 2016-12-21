if (global.describe) {
  var lab = {
    experiment: global.describe
  }
} else {
  var Lab = require('lab')
  var lab = exports.lab = Lab.script()
}
var td = require('testdouble')

var SomeClass, someFunction, subject
lab.experiment('moduleA', function () {
  console.log('A')

  if (typeof beforeEach !== 'undefined') lab.beforeEach = beforeEach
  lab.beforeEach(function (done) {
    someFunction = td.replace('../lib/some-function')
    SomeClass = require('../lib/some-class')
    subject = require('../lib/module-a')
    done()
  })

  if (typeof it !== 'undefined') lab.test = it
  lab.test('calls someFunction with an instance of SomeClass', function (done) {
    subject()

    td.verify(someFunction(td.matchers.isA(SomeClass)), { times: 1 })

    done()
  })

  if (typeof afterEach !== 'undefined') lab.afterEach = afterEach
  lab.afterEach(function (done) {
    td.reset()
    done()
  })
})
