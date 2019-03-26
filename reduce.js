'use strict';

const input = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';
let initialValue = '';
let myArray = input.split(' ');

const decode = function(accumulator, word) {
  if (word.length === 3) {
    return accumulator + ' ';
  } else {
    return accumulator + word[word.length-1].toUpperCase();
  }
};

const result = myArray.reduce(decode, initialValue);
console.log(result);