// ########################################################
// prototype link : 비추천
var superObj = { superVal: 'super' }
var subObj = { subVal : 'sub' }

// prototype link (.__proto__)
subObj.__proto__ = superObj;

console.log('subObj.subVal =>', subObj.subVal);     // sub
console.log('subObj.superVal =>', subObj.superVal); // super

subObj.superVal = 'sub';

console.log('superObj.superVal =>', superObj.superVal); // super

console.log('------------------------');

// ########################################################
// Object.create
var subObj2 = Object.create(superObj);
subObj2.subVal = 'sub';
//debugger;
console.log('subObj2.subVal =>', subObj2.subVal);     // sub
console.log('subObj2.superVal =>', subObj2.superVal); // super
subObj2.superVal = 'sub';

console.log('superObj.superVal =>', superObj.superVal); // super

console.log('------------------------');

// ########################################################
var kim = {
    name: 'kim',
    first: 10,
    second: 20,
    sum: function() {
        return this.first + this.second;
    }
}
console.log('kim.sum() : ', kim.sum());

/*
var lee = {
    name: 'lee',
    first: 10,
    second: 10,
    avg: function() {
        return (this.first + this.second) / 2;
    }
}
lee.__proto__ = kim;
*/
var lee = Object.create(kim);
lee.name = 'lee';
lee.first = 10;
lee.second = 10;
lee.avg = function() {
    return (this.first + this.second) / 2;
}
console.log('lee.sum() : ', lee.sum());
console.log('lee.avg() : ', lee.avg());