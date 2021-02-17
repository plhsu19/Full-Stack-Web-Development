// Exercise for Node.js
// Part 1. What floor does Santa end up on
// ( -> go UP 1 floor
// ) -> go DOWN 1 floor

// Part2. When does Santa first enter the basement

import fs from 'fs'

console.time('execution_time');
// read the input instruction from the .txt file
let instruction = fs.readFileSync('./input.txt', (err, data) => {
    if (err) {
        console.log('there is an error when reading the instructin file');
    }
}).toString()

// fuction for decode the instruction
function decoder(instr) {
    let floor = 0;
    let positionAtBasement = -5;
    let firstTime = true;
    for(let i = 0; i < instr.length; i++ ){

        if (instr[i] === "(") {
            floor += 1;
        }
        else {
            floor -= 1;
        }

        if(floor === -1 && firstTime === true) {
            positionAtBasement = i + 1;
            firstTime = false;
        }
    }

    return [floor, positionAtBasement];
}
let answer = decoder(instruction);
console.timeEnd('execution_time')

console.log("PartI: The floor in the instruction: ", answer[0])
console.log("PartII: The position when the Santa reach the basement: ", answer[1])