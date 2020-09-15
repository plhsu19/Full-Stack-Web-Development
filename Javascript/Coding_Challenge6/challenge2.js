// Question 2: Write a javascript function that takes an array of numbers and a target number. 
// The function should find two different numbers in the array that, when added together, give the target number. 
// For example: answer([1,2,3], 4) should return [1,3]
function solution(li, target) {
    // create a set for storing examined element
    let set1 = new Set();
    let answer = [];

    for (num of li) {
        let counter = target - num;
        if (set1.has(counter)) {
            answer.push([num, counter]);
        } 
        set1.add(num)
    }
    return answer
}

// unit test:
let testList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let testTarget = 12;

console.log(solution(testList, testTarget))