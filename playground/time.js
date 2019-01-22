const moment = require('moment');

// var date = new Date();
//
// console.log(date.getMonth());

var date = moment();
date.add(1, 'year').subtract(9, 'month');
console.log(date.format('MMM Do, YYYY'));
date.add(4, 'hour');
console.log(date.format('h:mm a'));

var createdAt = 1234;
var date = moment(createdAt);
console.log(date.format('h:mm a MMM Do, YYYY'));

var someTimeStamp = moment().valueOf();
console.log(someTimeStamp);