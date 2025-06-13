"use strict";

const printForecast = (arr) => {
  let print = "";
  for (let i = 0; i < arr.length; i++) {
    print = print + ` ${arr[i]}° in ${i + 1} days...`;
  }
  console.log(print);
};

const arr1 = [17, 21, 23];
const arr2 = [12, 5, -5, 0, 4];

printForecast([17, 21, 23]);
printForecast(arr2);
