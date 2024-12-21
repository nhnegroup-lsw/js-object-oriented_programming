// 객체를 찍어내는 공장
// ecmascript 6 (ES6)
// https://caniuse.com : search 'ES6 classes'
// https://babeljs.io/

// ########################################################
// class
class Person {
    constructor(name, first, second) {
        this.name = name;
        this.first = first;
        this.second = second;
    }
    sum() {
        return (this.first + this.second);
    }
    /*
    avg() {
        return (this.first + this.second)/2;
    }
    */
}
/*
Person.prototype.sum = function() {
    return 'prototype : ' + (this.first + this.second);
}
*/
 
var kim = new Person('kim', 10, 20);
kim.sum = function() {
    return 'this : ' + (this.first + this.second);
}
//console.log('kim', kim);
console.log("kim.sum()", kim.sum());

var lee = new Person('lee', 10, 10);
console.log("lee.sum()", lee.sum());

console.log('-----------------------------');

// ########################################################
// 상속 (Inheritance)
class PersonPlus extends Person {
    /*    
    constructor(name, first, second) {
        this.name = name;
        this.first = first;
        this.second = second;
        console.log('constructor');
    }
    sum() {
        return 'prototype : ' + (this.first + this.second);
    }
    */        
    avg() {
        return (this.first + this.second) / 2;
    }
}

var kim = new PersonPlus('kim', 10, 20);
console.log("kim.sum()", kim.sum());
console.log("kim.avg()", kim.avg());

console.log('-----------------------------');

// ########################################################
// super
class PersonPlus2 extends Person {
    constructor(name, first, second, third) {
        super(name, first, second);
        this.third = third;
    }
    sum() {
        return (super.sum() + this.third);
    }
    avg() {
        return (super.sum() + this.third) / 3;
    }
}

var lee = new PersonPlus2('lee', 10, 20, 30);
console.log("lee.sum()", lee.sum());
console.log("lee.avg()", lee.avg());