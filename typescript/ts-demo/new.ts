function factory<T>(): T {
    var type: {new(): T;};
    return new type();
}

class MyClass {
    public className: string;
    constructor(className?: string) {
        this.className = className || 'hehelo';
    }
}

var myClass: MyClass = factory<MyClass>();


