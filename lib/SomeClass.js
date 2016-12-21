
function SomeClass() {
  this.field = '';
}

SomeClass.prototype.someMethod = function someMethod(s) {
    this.field = s;
};

exports.SomeClass = SomeClass;
