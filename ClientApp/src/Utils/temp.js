"use strict";

const fs = require("fs");

let rawdata = fs.readFileSync("marketsfiltered.json");
let student = JSON.parse(rawdata);
let output = student.map(item => {
  item.Status = getRandomInt(1, 3);
  item.TimeStamp = "jetzt";
  return item;
});
console.log(output[0]);

let data = JSON.stringify(output);
fs.writeFileSync("output.json", data);

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
