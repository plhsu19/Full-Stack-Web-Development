
// For all of these, what is the value of a when the function gets called with the alert()
// #1
function q1() {
    var a = 5;
    if(a > 1) {
        a = 3; //a got overwritten by 3 in local scope within q1
    }
    alert(a); // a: 5(wrong)
}

//a should be 3 as a is changed in the q1 scope


//#2
var a = 0;
function q2() {
    a = 5;
}

function q22() {
    alert(a); // a: 0 (wrong)
}
//a should be 5 as global variable a is assigned to 5 in q2()

//#3
function q3() {
    window.a = "hello"; // create a global variabe a
}


function q32() {
    alert(a); //error: a is not defined (wrong)
}
// if q3() is ran first, than a global variable window.a is created and assigned as 'hello'
// a shold be 'hello' when q32() is called

//#4
var a = 1;
function q4() {
    var a = "test";
    alert(a); //a: test
}
q4();
console.log(a); //a: 1

//#5
var a = 2;
if (true) {
    var a = 5;
    alert(a); //a: 5
}
alert(a); //a: 2(wrong -> 5)
// if statement do not create a new scope, therefore a new variable 'a'
// is created and assigned by 5 in global scope