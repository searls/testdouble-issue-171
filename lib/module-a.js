var SomeClass = require('./some-class')
var someFunction = require('./some-function')

module.exports = function moduleA () {
  var instanceOfSomeClass = new SomeClass()

  someFunction(instanceOfSomeClass)

  return instanceOfSomeClass
}
