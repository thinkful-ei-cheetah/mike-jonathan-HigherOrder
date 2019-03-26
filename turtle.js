'use strict';

const turtleSteps = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

turtleSteps.filter(step => (step[0]>-1 && (step[1]>-1)))
    .map(step => step[0]+step[1])
    .forEach(step => console.log(step));

