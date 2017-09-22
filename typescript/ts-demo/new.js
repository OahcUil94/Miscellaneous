function factory() {
    var type;
    return new type();
}
var MyClass = /** @class */ (function () {
    function MyClass(className) {
        this.className = className || 'hehelo';
    }
    return MyClass;
}());
var myClass = factory();
