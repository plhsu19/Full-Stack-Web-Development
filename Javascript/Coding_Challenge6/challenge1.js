// Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], 
// make a function that organizes these into individual array that is ordered. 
// For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. 
// Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]


//test unit
let testArray = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
console.log(solution(testArray));

// standard solution
function solution(array) {
    let answer = [];
    let sortedArray = array.slice().sort((a, b) => a - b);

    let pre = sortedArray[0];
    let tempArray = [];

    for (num of sortedArray) {
        // when the num is same as the previous num, add the num to the temp array
        if (num === pre) tempArray.push(num);
        // if the num is different from the previous num, then 1. put the temp array into the answer array 2. start the new temp array and push the num in it
        else {
            // if the temp array length is 1, push the only num into the answer array
            if (tempArray.length === 1) answer.push(tempArray[0]);
            // else (the temp array length is not 1) push the temp array into answer
            else answer.push(tempArray);

            // start the new temp array and push the num in it
            // re-assign the num to pre
            tempArray = [];
            tempArray.push(num);
            pre = num;
        }
    }
    // check the last temp array and push it to the answer    
    // if the temp array length is 1, push the only num into the answer array
    if (tempArray.length === 1) answer.push(tempArray[0]);
    // else (the temp array length is not 1) push the temp array into answer
    else answer.push(tempArray);

    return answer;
}


// Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]
// test unit
let testArrayBonus = [1, "2", "3", 2, 8, 100, 4, "80", 9, "9", "4", 3, 10, 100, 8]
let answerArray = solutionBonus(testArrayBonus)
console.log(answerArray)

// solution bonus
function solutionBonus(arr) {
    // final answer array
    let answerArray = []

    // sort the array using numerical order no matter string or number
    let arraySorted = arr.sort((a, b) => a - b)

    // filter the number array and string array
    let numArray = arraySorted.filter(elem => typeof(elem) === "number")
    let strArray = arraySorted.filter(elem => typeof(elem) === "string" )

    // add 2 arrays into the answer array
    // answerArray.splice(0, 0, numArray, strArray)
    answerArray.push(numArray, strArray)

    return answerArray
}