'use strict';
function hazardWarningCreator(typeOfWarning) {
  let warningCounter = 0;
  return function(location) {
    warningCounter++;
    let multipleTimes = 'times';
    if (warningCounter === 1) {
      multipleTimes = 'time';
    }
    console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
    console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} ${multipleTimes} today!`);
  };
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const fireWarning = hazardWarningCreator('FIRE!!');
const floodWarning = hazardWarningCreator('Watch for floods');

rocksWarning('Main St and Pacific Ave');
rocksWarning('Centinela Ave and Olympic Blvd');
fireWarning('Your house');
floodWarning('Your yard');

