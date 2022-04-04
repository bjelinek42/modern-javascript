var moment = require('moment');
const Chart = require('chart.js');
// const myChart = new Chart(ctx, {...});

console.log("hello");

console.log(moment().format("MMM Do YY"));

var name = "Ben";
console.log(`hello, my name is ${name} and it is ${moment().format("MMM Do YYYY")}`);