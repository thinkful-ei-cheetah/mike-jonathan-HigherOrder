'use strict';
function repeat(fn, n) {
  for (let i = 0; i < n; i++) {
    fn();
  }
}

function hello() {
  console.log('Hello world');
}

function goodBye() {
  console.log('Goodbye world');
}

repeat(hello, 5);
repeat(goodBye, 5);
