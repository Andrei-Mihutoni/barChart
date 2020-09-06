"use strict";

const allBars = document.querySelectorAll(".bar");

const arr = [
  10,
  12,
  32,
  26,
  25,
  22,
  23,
  11,
  28,
  1,
  9,
  19,
  1,
  6,
  2,
  11,
  5,
  6,
  10,
  4,
  0,
  3,
  0,
  26,
  20,
  29,
  22,
  4,
  3,
  5,
  5,
  27,
  2,
  26,
  0,
  20,
  1,
  22,
  25,
  25,
];

const getFakeCustomers = () => {
  const random = Math.floor(Math.random() * 32);
  arr.push(random);
};

const visualizeData = () => {
  for (let i = 0; i < arr.length; i++) {
    allBars[i].style.height = arr[i] + "%";
  }
  console.log(arr);
};
visualizeData();

//get first element from arr and push it to the end.
const modifyArr = () => {
  const random = Math.floor(Math.random() * 32);
  let elementShifted = arr.shift();
  arr.push(random); //elementShifted
};
modifyArr();

//constantly loop through the two functions
const infinityLoop = () => {
  modifyArr();
  visualizeData();
  setTimeout(infinityLoop, 1000);
};
infinityLoop();

// function getNumberOfCustomers() {
//   return Math.floor(Math.random() * 32);
// }
// const queueSize = getNumberOfCustomers();
// console.log(queueSize);

// let i = 1;
// const arr = [];

// function populateArray() {

//   if (i > arr.length) {
//     arr.unshift(i);
//     i++
//     console.log(arr);

//   }

//   if (i > 9) {
//     arr.pop();
//   }
//   setTimeout(populateArray, 1000);

//   for (let i = 0; i < 40; i++) {
//   allBars[i].style.height += arr[i] + 'px';
// }

// }

// populateArray();

// 'use strict';

// const allBars = document.querySelectorAll('.bar');

// const numberArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,];

// function modifyBars() {
//   numberArr.forEach(bar => {
//     allBars[bar].style.height = bar + 'px';
//   });
//   setTimeout(modifyBars, 1000);
// }

// modifyBars()
