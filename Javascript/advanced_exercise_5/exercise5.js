// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
const forEachArray = []
array.forEach(num => {
  num.username = num.username + '!';
  forEachArray.push(num);
});

console.log(forEachArray);

//Create an array using map that has all the usernames with a "? to each of the usernames
const mapArray = array.map(num => {
  num.username = num.username + '?';
  return num;
})

console.log(mapArray);

//Filter the array to only include users who are on team: red
const filterArray = array.filter(num => num.team === 'red')
console.log(filterArray)

//Find out the total score of all users using reduce
const totalScore = array.reduce((acc, num) => acc + num.score, 0)
console.log(totalScore);

// (1), what is the value of i? 
// A: the index of current element in the array (started from 0 to array.len - 1)
// (2), Make this map function pure: 
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
	// console.log(num, i);
	// alert(num);
	return num * 2;
})

console.log(newArray);

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
// map return a new array with users' references
const mapArray2 = array.map(user => {
  user.items = user.items.map(item => item + '!'); // return a new array with (new) items!
  return user
})

console.log(mapArray2)
console.log(array)
