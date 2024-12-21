function Person(name, first, second, third) {
    this.name = name;
    this.first = first;
    this.second = second;
    this.third = third;
    this.sum = function() {
        return this.first + this.second + this.third;
    }       
}
var kim = new Person('kim', 10, 20, 30);
var lee = new Person('lee', 10, 10, 10);

console.log("kim.sum()", kim.sum());
console.log("lee.sum()", lee.sum());

class Person2 {
    constructor(name, first, second, third) {
        this.name = name;
        this.first = first;
        this.second = second;
        this.third = third;
        this.sum = function () {
            return this.first + this.second + this.third;
        };
    }
}
var kim2 = new Person2('kim', 10, 20, 30);
var lee2 = new Person2('lee', 10, 10, 10);

console.log("kim2.sum()", kim2.sum());
console.log("lee2.sum()", lee2.sum());


/*
var kim = {
    name:'kim',
    first:10,
    second:20,
    third:30,
    sum:function() {
        return this.first + this.second + this.third;
    }   
}
var lee = {
    name:'kim',
    first:10,
    second:10,
    third:10,
    sum:function() {
        return this.first + this.second + this.third;
    }   
}
console.log("kim.sum()", kim.sum());
console.log("lee.sum()", lee.sum());

var d1 = new Date('2024-06-19');
console.log("d1.getFullYear()", d1.getFullYear());
console.log("d1.getMonth()", d1.getMonth()+1);
console.log("d1.getDate()", d1.getDate());

console.log('Date', Date);

//
console.log('Person()', Person());

// constructor
console.log('new Person()', new Person());
*/