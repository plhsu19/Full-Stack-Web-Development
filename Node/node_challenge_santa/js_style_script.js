// ( -> go UP 1 floor
// Part 1. What floor does Santa end up on
// ) -> go DOWN 1 floor
import fs from 'fs'

function question1() {
    console.time('q1_run_time')
    fs.readFile('./input.txt', (err, data) => {
        let instructString = data.toString();
        let instructArray = instructString.split(''); // split every charater
        let answer = instructArray.reduce((acc, item) => {
            if (item === '(') {
                return acc += 1;
            }
            else {
                return acc -= 1;
            }
        }, 0)
        console.timeEnd('q1_run_time');
        console.log('floor: ', answer);
    })
}

question1()

// Part2. When does Santa first enter the basement
function question2() {
    console.time('q2_run_time')
    fs.readFile('./input.txt', (err, data) => {
        let instructString = data.toString();
        let instructArray = instructString.split('');
        let floor = 0;
        let position = 0;
        instructArray.some((item) => {
            if (item === '(') {
                floor += 1
            }
            else {
                floor -= 1
            }
            position += 1;
            if (floor < 0) return true
        })
        console.timeEnd('q2_run_time')
        console.log('position: ', position)
    })
}

question2()


























