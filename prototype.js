// prototype based language
/*
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
kim.sum = function() {
    return 'modified : ' + (this.first + this.second);
}
var lee = new Person('lee', 10, 10, 10);
lee.sum = function() {
    return 'modified : ' + (this.first + this.second);
}
console.log("kim.sum()", kim.sum());
console.log("lee.sum()", lee.sum());
*/

// 생산성, 메모리 문제
// 객체의 공통적으로 사용되는 속성을 만들 수 있으면 얼마나 좋을까? 
// 프로토타입 : constructor function으로 생성된 Object에서 참조 가능한 function을 만들게 해준다.
function Person(name, first, second, third) {
    this.name = name;
    this .first = first;
    this.second = second;
    this.third = third;
}

Person.prototype.sum = function() {
   return 'prototype : ' + (this.first + this.second);
}

var kim = new Person('kim', 10, 20, 30);
kim.sum = function() {
    return 'this : ' + (this.first + this.second);
}
var lee = new Person('lee', 10, 10, 10);
console.log("kim.sum()", kim.sum());
console.log("lee.sum()", lee.sum());