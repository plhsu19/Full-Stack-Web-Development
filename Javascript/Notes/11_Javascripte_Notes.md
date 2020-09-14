# 11. Javascript

[How Does JS work?](https://www.notion.so/How-Does-JS-work-d416cb2a27d94adb8de69cc2c878c792)

## Sec11 & Sec13 Javascript

### Intro

1. the **verb** of the website/webapp
2. ECMAscript = JS

## JS Types

(Number, String, Boolean, Undefined, Symbol, null, Object, Function (, BigInt)

### 1. Data types (Primitive types)

`6 Data Types that are primitives: Number, String, Boolean, undefined, BigInt, Symbol`

primitive (primitive value, primitive data type) is data that is not an **object,** has **no methods** and **immutable.**

- **Number** (Int? float?):
    1. **operators**:  +, -,  * ,  /, %
    2. **NaN**: not a number
- **String**:
    1. "Pei" or 'Pei'
    2. string concenate : + (java like)

        ```jsx
        "Hello" + " World!"
        "Hello World!"
        ```

    3. add ' or " into string by using \:

        ```jsx
        'This isn\'t very nice'
        "This isn't very nice"
        ```

        what ever after **\ is special meaning of string, not operator**

    4.  string + number = number

    ```jsx
    10 + '34'
    "1034"
    ```

    5. number - string = number

    ```jsx
    25 - '29'
    -4
    ```

    6. String - string = NaN

    ```jsx
    'bob' - 'alice'
    NaN
    ```

- **Boolean**:
    - true/false
    - most conditional operators are same: >, <, > =, < =,
    - equals: === (not type transfer, recommended)
    - not equal: ! == (not type transfer, recommended)
- **Undefined (variable):**
    - var

    ```jsx
    var test = "this is a string stored in the variable" + "!";
    ```

    - var that has not been assigned with type of "undefined"

    ```jsx
    var c;
    undefined
    typeof(c)
    "undefined"
    ```

    - name of the variable need to start with a letter (no number, no symbol)
    - camel case naming tradition
- **Symbol**
    - constructor function: Symbol('string for the symbol')

    used to  produces an anonymous, unique value

    A Symbol value represents a unique identifier for debugging purpose only

    ```jsx
    let s1 = Symbol();
    let s2 = Symbol();

    console.log(s1 === s2);
    false
    ```

### 2. Structural Types (Reference Type): Object

1. define and create an object (!very different from other languages!)
    - instance variable:

         `name: 'Pei'`

    - method:

        `shout: function() {}`

    ```jsx
    var user = {
        name: 'Pei',
        age: 31,
        gender: 'male',
        isMarried: false,
        spell: ['pirika', 'gogo'],
        shout: function() {
            alert('Ahhhhh');
        }
    };
    ```

2. Reference type: objects are reference types

    ```jsx
    // Reference type
    let object1 = {value: 10}
    let object2 = object1;
    let object3 = {value: 15}

    // on console
    object1 === object2
    true
    object1 === object3
    false
    object1.value = 20
    20
    object2.value;
    20
    ```

3. Context (**this**): what is the **object** (environment) that we are inside right now 

    (Difference from scope: the scope, for let and const, is defined by curly brackets {})

    ```jsx
    // scope
    function a() {
        let b = 4;
    }
    console.log(b)
    script.js:11 Uncaught ReferenceError: b is not defined
        at script.js:11

    // context1 
    console.log(this)
    $Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}

    window === this
    $true

    // context2
    function a() {
        console.log(this);
    }
    a()
    $Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}

    // context3
    let objectContext = {
        a : function() {
            console.log(this)
        }    
    }
    objectContext.a()

    script.js:9 {a: ƒ}
    ```

4. Instantiation: 
    - Create objects of the same type by defining the class (type) of the object and using the constructor in the class to create instances (objects) of that type/class

    ```jsx
    // Define a Class + Instantiation of the class (create a object of the class)
    class Player {
        constructor(name, type) {
            console.log(this);
            this.name = name;
            this.type = type;
        }
        introduce() {
            console.log(`Hi, I am ${this.name}, I'm a ${this.type}`);
        }
    }

    let player1 = new Player('Bob', "RPG_player")
    ------------------------------------------
    Player {}name: "Bob"type: "RPG_player"__proto__: Object
    player1
    Player {name: "Bob", type: "RPG_player"}
    ```

5. Inheritance:
    - Inheritance an object type by using java-like/python-like syntax:

    ```jsx
    // Class Inheritance
    class Player {
        constructor(name, type) {
            console.log('Player', this);
            this.name = name;
            this.type = type;
        }
        introduce() {
            console.log(`Hi, I am ${this.name}, I'm a ${this.type}`);
        }
    }

    class Wizard extends Player {
        constructor(name, type) {
            super(name, type);
            console.log('Wizard', this);
        }
        play() {
            console.log(self.name, 'is using magic!');
        }
    }

    let wizard1 = new Wizard('Dio', 'healer');
    let wizard2 = new Wizard('JoJo', 'black-magician');
    ----------------------------------------------------------
    script.js:15 Player Wizard {}
    script.js:27 Wizard Wizard {name: "Dio", type: "healer"}
    script.js:15 Player Wizard {}
    script.js:27 Wizard Wizard {name: "JoJo", type: "black-magician"}
    wizard1.introduce()
    script.js:20 Hi, I am Dio, I'm a healer
    wizard1.play()
    script.js:30 Dio is using magic!
    ```

6. Deep clone object (only first layer instances are copied):

    ```jsx
    let obj = {
        a: 'a', b : 'b', c : 'c'
    }

    let clone = {...obj}
    clone.c = 9;

    console.log(clone);
    console.log(obj)
    -----------------------------------
    {a: "a", b: "b", c: 9}
    {a: "a", b: "b", c: "c"}
    ```

- **null**: undefined/unconstructed object.

### 3. Other Type:

- **Function**: see Function section below

## Pass By Value and Pass By Reference

1. Pass by Value
    - the variable (a space in memory) is assigned with a primitive value: this variable contains a address referencing to where this primitive value sits in the memory (occupy a memory space)
    - When the primitive value of the variable is passed to another variable: the value is copied, stored in a new memory space, and assign the address of the value to the another variable
    - <Operations on primitive type variables do not interfere with each others>

    ```jsx
    let a = 5;
    let b = a;
    b++
    console.log(a)
    console.log(b)
    ------------------
    5
    6
    ```

    ![11%20Javascript%20d2edc2903d43474ba493806e68882ca6/Screen_Shot_2020-08-29_at_1.49.05_PM.png](11%20Javascript%20d2edc2903d43474ba493806e68882ca6/Screen_Shot_2020-08-29_at_1.49.05_PM.png)

2. Pass by Reference
    - Do not copy the value in a new memory space when passing the object value
    - Pass the object value by passing an address referencing to the memory space where the object (value) sits.

        ![11%20Javascript%20d2edc2903d43474ba493806e68882ca6/Screen_Shot_2020-08-29_at_2.29.20_PM.png](11%20Javascript%20d2edc2903d43474ba493806e68882ca6/Screen_Shot_2020-08-29_at_2.29.20_PM.png)

## Functions

```jsx
typeof(alert)
"function"
```

The type of a function is function

1. **function declaration**:
(create a function (object) called helloWorld

    ```jsx
    function helloWorld(){
        console.log('Hello World!');
    }
    ```

    function helloWorld() return nothing (void, undefined)

2. f**unction expression**
Assign a function to a variable (a function is similar as an object)

    ```jsx
    var sayBye = function byeBye() {
        console.log('Bye World!');
    };
    ```

    name of the function is 'sayBye'. 

    **Anonymous function**
    alternative way to assign a function to a variable (a function (object) without a name):

    ```jsx
    var sayBye = function() {
        console.log('Bye World!');
    };
    ```

3. function that return a value:

    ```jsx
    function multiply(a, b) {
        return a * b;
    }
    ```

4. The function inside an object is called 'method'

    ```jsx
    //function:
    function test2() {
        console.log('test');
    }
    //method:
    var ob = {
    		thisIsMethod: function(para1, para2) {
    		}
    }

    //evoke:
    test2();
    ob.thisIsMethod(arg1, arg2);
    ```

5. calling/evoking a function

    ```jsx
    alert();
    c = multiply(2, 5);
    ```

## Data Structures:

- **Objects** that implement various data structures, eg, list, set,...
- a collection of data types (+ methods)
1. **Array**
    1. Array basics:

        ```jsx
        var list = ['tiger', 'rabbit', 'snake'];
        var list2 = [1, 2, 3, 4];
        var list3 = [['tiger', 'cat', 'bear', 'bird']];
        // pop and shift the elements in the head(shift) and tail(pop)
        list.shift();
        list.pop();

        //push an element to the end of array
        list.push('elephant');

        //concat a new array to the end of original array (not inplace)
        list.concat(['deer', 'fish']);
        $["tiger", "rabbit", "snake", "deer", "fish"]

        //check if an item is in the array
        list.includes('tiger');
        $true

        // any thing can be stored in a list
        list
        ["tiger", 3, true, undefined, ƒ, ƒ, Set(3)]
        ```

    2. **Array.forEach**(functionA(item))

        Loop through the array and pass each item in array to the functionA. Then execute the functionA.

        ```jsx
        // 1. forEach
        const a = [1, 2, 6, 10]
        const doubleA = []
        const newArray = a.forEach((num) => {
            doubleA.push(num * 2);
        });

        console.log('forEach: ', doubleA);
        $forEach:  (4) [2, 4, 12, 20]
        ```

    3. **Array. map(functionA(item))**
        - loop each element in array, pass it to functionA, and return a new array (with elements being processed by functionA)
        - deterministic (pure function)
        - no side effect caused by the .map()

        ```jsx
        //2. map
        const a = [1, 2, 6, 10]
        const mapArray = a.map(num => num * 2);
        console.log('map: ', mapArray);
        $ map:  (4) [2, 4, 12, 20]
        ```

    4. **Array.filter**
        - loop each element in array, pass it to functionA, and return a boolean that specify whether the element satisfy the condition. If no, the element will be filtered from the array.
        - deterministic (pure function)
        - no side effect caused by the .map()

        ```jsx
        // 3. filter
        const a = [1, 2, 6, 10]
        const filterArray1 = a.filter(num => num > 5);
        const filterArray2 = a.filter(num => num === 5);

        console.log('filterArray1: ', filterArray1);
        console.log('filterArray2: ', filterArray2);

        filterArray1:  (2) [6, 10]
        filterArray2:  []
        ```

    5. **Array.reduce**
        - The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in single output value (return a value)
        - deterministic (pure function)
        - no side effect caused by the .map()

        ```jsx
        // 4. reduce
        const a = [1, 2, 6, 10]

        const reduceArray = a.reduce((accumulator, num) => {
            return accumulator + num;
        })

        // start with accumulator = 10
        const reduceArray2 = a.reduce((accumulator, num) => {
            return accumulator + num;
        }, 10)

        console.log('reduce: ', reduceArray);
        console.log('reduce2: ', reduceArray2);

        reduce:  19
        reduce2:  29
        ```

    6. Other array methods:
        - Array.reverse()
        - Array.sort()
        - Array.splice(idx, num, item1, item2, ...)

2. **Set:** set in Python
3. **Map:** dict in Python
4. **Customized Object**

## Comparison Details

```jsx
!==
===
>=
<=
>
<
```

- `x === y`The triple equals operator (===) returns true if both operands are of the same type and contain the same value. If comparing different types for equality, the result is false. (! == also)
    - NaN === Nan: false
    - NaN (not a number) cannot be compared and return false when using === to  compare
- `x == y` (Type Coercion)

    The double equals operator (`==`) tries to perform type conversion if the types differ and then compare for equality. If the types differ, either or both operands are first converted to a common type. The conversion rules are complex and depend on the argument types.

    ```jsx
    console.log(1 == '1')

    // Coerce 1 to true, and 0 to false
    if (1) {
        console.log('condition variable is not 1')
    }

    // Coerce 1 to true, and 0 to false
    if (0) {
        console.log('condition variable is not 0')
    }

    ------------------------------------------------
    true
     condition variable is not 1
    ```

**<Notice: only use triple === (and ! ==), not ==>**

## Control Flow (Conditionals)

(Basically same as Java's syntax)

1. if

    ```jsx
    if (a === b) {
    operations;
    }
    ```

2. else, else if

    ```jsx
    var name = 'Sussy';
    if (name === 'Billy') {
    alert('Hi Billy');
    } else if (name === 'Sussy') {
    alert('Hi Sussy');
    } else {
    alert('I do not know you');
    }
    ```

3. ternary operator

## Logical Operators

(same as Java)

1. &&: logical and
2. ||: or
3. !: not

## Loops

1. for 

    ```jsx
    for (var i = 0; i < len; i++) {
        toDo.pop();
    }
    ```

2. while

    ```jsx
    var count = 0;
    while (count < 10) {
        console.log(count);
        count += 1;
    }
    ```

3. do while

    ```jsx
    var count2 = 10;
    do {
        console.log(count2);
        console.log('this is in do statememt'); 
        count2 -= 1;
    } while (count2 > 10)
    ```

4. **forEach**

    similar as 'for i in iterable' + 'lambda' in python

    ```jsx
    // call and pass each item(+index) in iterable to the functionA
    iteratable.forEach(functionA);
    ```

    ```jsx
    // iterate through items and pass them to the function
    toDo.forEach(
    	function(i){
        console.log(i);
    })

    // iterate through item and index and pass them to the functionA
    toDos.forEach(function(toDo, i){
        console.log(toDo, i);
    })
    ```

    ```jsx
    // could also define the callback function separately, and pass it to the forEach().
    **function lambda(toDo, i) {
        console.log(toDo, i);
    }

    toDos.forEach(lambda);**
    ```

5. for of
    - **Iterating** over items of **iterable** types: arrays, strings
    - Iterable: arrays, strings

    ```jsx
    const basket = ['apples', 'oranges', 'grapes'];
    // for-of 
    for (item of basket) {
        console.log(item);
    }

    -------------------------------
    apples
    oranges
    grapes

    for (item of 'iterable') {
        console.log(item)
    }
    ```

    - Similar as Java's for-each loop : `for (string s : ArrayListOfString) {}`
6. for-in
    - **iterates(enumerate) over all enumerable properties of an object that are keyed by strings**
    - enumerable: objects
    - object is enumerable if we can access/see the properties of the object one by one

    ```jsx
    const detailedBasket = {
        apples: 5,
        oranges: 10,
        grapes: 100
    }

    // for-in
    for (item in detailedBasket) {
        console.log(item);
    }
    -------------------------------
    apples
    oranges
    grapes
    ```

    - All objects are enumerable, but not all objects are iterable

    ```jsx
    const basket = ['apples', 'oranges', 'grapes'];
    const detailedBasket = {
        apples: 5,
        oranges: 10,
        grapes: 100
    }
    iterates over all enumerable properties of an object that are keyed by stringsiterates over all enumerable properties of an object that are keyed by strings
    for (item in basket) {
        console.log(item);
    }

    for (item of detailedBasket) {
        console.log(item);
    }
    ------------------------------------------
    0
    1
    2
    Uncaught TypeError: detailedBasket is not iterable
        at <anonymous>:1:14
    ```

## I/O

1. prompt user to enter and read the input to variable

    ```jsx
    prompt("what's your name:")
    ```

    - **prompt(string)** equals **input(string)**
    - prompt user to type some thing in the jump up box

    ```jsx
    var a = prompt("enter first number:")
    typeof(a)var a = prompt("enter first number:")
    undefined
    "string"
    ```

    - assign the input from user to the var a (default as a string)
    - **typeof() is type()**

    ```jsx
    var numberOfa = Number(a)
    undefined
    ```

    - change the type of the input string to a number (for later numerical operations)
    - **Number() = int() or float()**

    ```jsx
    var num1 = prompt("enter 1st. num:");
    var num2 =prompt('enter 2nd num:');
    var sum = Number(num1) + Number(num2);
    alert('The sum is ' + sum);
    ```

    - **alert(string)**: similar to print(string), but in pop up window
2. print the log string on console (= print() in python)

    ```jsx
    console.log('string to print on console');
    ```

## Others

- ;  →  at end of each expression, ie, a fragment of code that produce a value.
- **Expression: something that denotes/produces a value**

    ```jsx
    1 + 3;
    var = 2;
    return trus;
    ```

- Semicolons:
    - cases don't need semicolons:

        if (...) {...} else {...}for (...) {...}while (...) {...}

        Note: You do need one after: do{...} while (...);

- debugger

    insert in the codes for debugging, which shows:

    a. variables in scope

    b. contex (the value of this, ie., 'this' is currently which object)

    ```jsx
    const flatten = [[0, 1], [2, 3], [4, 5]].reduce((accumulator, array) => {
        debugger;
        return accumulator.concat(array)
    }, [])
    ```

## Deploy JS in HTML

1. <script></script> tag: old methods

    ```jsx
    <script>
            var a = 3;
            var b = 4;
            if (a !== b) {
                console.log('a equals b');
            }
    </script>
    ```

2. external javascript reference

    ```jsx
    <script type='text/javascript' src="script.js"></script>
    ```

    - attribute defer: load the script a last ( same as putting the <script> reference at the end of the body
    - attribute async: keep loading the whole page while loading the script file. execute the script as soon as it is loaded completely

## JS Keywords

- should be avoid to use keywords variable names

    break
    case
    catch
    class
    const
    continue
    debugger
    default
    delete
    do
    else
    export
    extends
    finally
    for
    function
    if
    import
    in
    instanceof
    new
    return
    super
    switch
    this
    throw
    try
    typeof
    var
    void
    while
    with
    yield

## Sec13 Advanced Javascript

### 1. Scope

1. Root Scope: 

    a. The default scope when execute the JS code in console

    b. **root scope** (global parent scope) = window scope = **window object**

    ```jsx
    function aa() {
        console.log('local scope in function');
    }
    window.aa

    $ ƒ aa() {
        console.log('local scope in function');
    }
    ```

2. Function Local Scope:

    a. scope within functions

    b. can access or change variable in global scope

    ```jsx
    var b = 'original text';

    function changeb() {
        b = 'changed text';
    }

    changeb()

    console.log(b);
    VM346:1 changed text
    ```

    c. Create a variable with same name as global variable in a function scope (using var keyword), it creates a new variable and thus will not change global variable anymore:

    ```jsx
    var a = 1;
    function q4() {
        var a = "test";
        console.log(a); //a: test
    }
    q4();
    console.log(a); //a: 1
    VM1005:4 test
    VM1005:7 1
    ```

3. Naming conflict: 
    - naming a local variable in the same way as global variable ⇒ overwrite the global variable in the local scope
    - if a variable name is not defined in current scope, the JS will look up 1 scope upper (parent scope) for searching the variable name
4. if statement is not a local scope but still the public scope, which any change to variable is same as those that occur in global scope:

    ```jsx
    var a = 2;
    if (true) {
        var a = 5;
        console.log(a); //a: 5
    }
    console.log(a);
    VM1084:4 5
    VM1084:6 5
    ```

### 2. Advanced Control Flow

1. ternary operater:

    condition(boolean) ? express1 : express2;

    **—> if condition is true, return express1, else return express2**

    ```jsx
    function isValid(bool) {
        return bool;
    }
    // var passWord = isValid(true) ? '1234' : 'access denied';

    var passRequest = 'your password is: ' + (isValid(false) ? '1234' : 'access denied');
    console.log(passRequest);
    ```

2. switch

    if else if, with multiple cases

    - need to use break if not going to check other cases once a case is matched.

    ```jsx
    function action(command) {
        var result;
        switch(command) {
            case 'right':
                result = 'meet a slime';
                break;
            case 'left':
                result = 'pick up a sword';
                break;
            case 'up':
                result = 'run away';
                break;
            case 'down':
                result = 'combat';
                break;
            default:
                result = 'please enter valid command'
        }
        return result;
    }
    ```

### 3. Variable (ES5 & ES6)

1. var: traditional key word to declare a function-scoped or globally-scoped variable
    - function scoped: only create a local variable in a function (not in if or for blocks)
    - var declarations, wherever they occur, are processed before any code is executed. This is called hoisting.

    ```jsx
    var x = 1;

    if (x === 1) {
      var x = 2;

      console.log(x);
      // expected output: 2
    }

    console.log(x);
    // expected output: 2
    ```

2. **let: statement declares a block-scoped local variable**

    Variables declared by let have their scope in the block for which they are defined, as well as in any contained sub-blocks. In this way, let works very much like var.

    ```jsx
    let x = 1;

    if (x === 1) {
      let x = 2;

      console.log(x);
      // expected output: 2
    }

    console.log(x);
    // expected output: 1
    ```

    - let does not create a property on the global object

    ```jsx
    var x = 'global';
    let y = 'global';
    console.log(this.x); // "global"
    console.log(this.y); // undefined
    ```

3. const: block-scoped, much like variables defined using the **let** keyword (~let)
    - The value of a constant can't be changed through reassignment, and it can't be redeclared

    ```jsx
    const number = 42;

    try {
      number = 99;
    } catch (err) {
      console.log(err);
      // expected output: TypeError: invalid assignment to const `number'
      // Note - error messages will vary depending on browser
    }

    console.log(number);
    // expected output: 42
    ```

    - The const declaration creates a read-only reference to a value. It does not mean the value it holds is immutable—just that the variable identifier cannot be reassigned. For instance, in the case where the content is an object, this means the object's contents (e.g., its properties) can be altered.

    ```jsx
    const obj = {
        player : 'bobby',
        experience : 100,
        masterLevel : false
    }

    obj.experience = 39;
    ```

- Quick method to declare and assign variables form object's instance variables:

```jsx
const obj = {
    player : 'bobby',
    experience : 100,
    masterLevel : false
}

const {player, experience} = obj;
let {masterLevel} = obj;

player
"bobby"
masterLevel
false
```

- Quick method to declare and assign object instance variables from existed variables

```jsx
var a = 'test';
var b = true;
var c = 789;

let okObj = {
    a, b, c
}

okObj
{a: "test", b: true, c: 789}
```

### 5. ES5 & ES6 Others:

1. format string

    ```jsx
    const player = 'bobby';
    let experience = 100;
    let masterLevel = false;

    const greeting = `Hello ${player}, your experience is ${experience - 40}`;
    ```

2. **default argument**

    ```jsx
    function greeting(player = 'Lisa', experience = 80){
        return `Hello ${player}, your experience is ${experience - 40}`;
    }

    greeting()
    "Hello Lisa, your experience is -20"
    ```

3. **arrow functions**

    simplified the creation of function with single return value by arrow:

    - ⇒ means return
    - still can include {} to specify operations and the return statement

    ```jsx
     function add(a, b) {
        return a + b;
    }

    const addArr = (a, b) => a + b;

    add(2, 4)
    6
    addArr(2, 4)
    6
    ```

    ```jsx
    // can still specify return
    const addArr = (a, b) => {
        return a + b;
    }
    ```

    - Can be further simplified: remove the parentheses

    ```jsx
    // Parentheses are optional when there's only one parameter name:
    // (singleParam) => { statements }
    // singleParam => { statements }

    const add2 = num => num + 2;
    console.log(add2(4));

    // The parameter list for a function with no parameters should be written with a pair of parentheses.
    // () => { statements }
    ```

4. Advanced Functions
    - functional programing: functions act like an object in OOP but with some different natures for the "instance function" contained in its parent function (a little like instance methods or instance variable contained in an object)
    1. **Closure**: a function ran, the function executed. It's never going to execute again.
    But it's going to remember that there are references to those variables initialized in the function, so the child scope always has access to the parent scope. (But the parent scope does not have access to the child's socpe

        ```jsx
        const first = () => {
            const greet = "hi";
            const second = () => {
                const name = 'boby'
                console.log(greet);
            }
            return second;
        }

        const newFunc = first();
        newFunc();
        hi
        ```

    2. Currying: the process of converting a function that takes multiple arguments into a function that takes them (arguments) one at a time
        - a function that return a function (its child function)

        ```jsx
        const multiply = (a, b) => a * b;

        // below currying function equals to above function
        const curriedMultiply = (a) => (b) => a * b;

        // In console:
        curriedMultiply(5)(3) 
        15
        const multiply5 = curriedMultiply(5); //curriedMultiply(5) return a function with 1 argument
        undefined
        multiply5(3)
        15
        ```

    3. Compose: the act of putting 2 functions together to form a third function, when the output of the 1st function is the input of the 2nd function:

        ```jsx
        const compose = (f, g) => (a) => f(g(a));
        const sum = (num) => num + 1;
        // On console:
        compose(sum, sum)(5);
        7
        ```

    - Functional (?) programming style avoid Side Effect + functional purity:
        1. side effects: the actions that conducted in/by functions that we don't know

            ```jsx
            let a = 1;
            function a() {
            	a = 2; //side effect that change a global variable (outside world)
            }
            ```

        2. avoid the side effect of function on the outside world (disturbance on the outside world, change status (variables) of outside world). Make the function as a stand alone universe as possible.
        3. functional purity (determinism): avoid the side effect, make the function always return something (value). **And make the function always return the same thing if we give the same input parameters (deterministic)** 
        ⇒ make the function always do the same thing and not affect variables that live outside the function.

        `Deterministic --> always produces the same results given the same inputs`

        `No Side Effects --> It does not depend on any state, or data, change during a program’s execution. It must only depend on its input elements.`

    ## 6. Modules

    - Problems in Inline Script
        1. Improve Code Reusability
        2. Pollution of global name space: Global name space→ Window object
    - Problems in Script Tags
        1. Still have to copy and paste the same script tag when using the same .js script
        2. Lack of Dependency Resolution: make sure the tags are in order according to the dependency edges in the scripts
        3. Pollution of global name space
    - Problems in IIFE (Immediately invoke function expression)
        1. Lack of Dependency Resolution: Order of the script tags are still important 
    - Browserify (not used now, just know)
        - Module Bundler: Bundle all JS scripts into a file

        ```jsx
        // import the function in js1 script into js2 scirpt
        // js1
        module.exports = function add(a, b) {
            return a + b;
        } 

        // js2
        var add = require("./add");
        ```

    - ES Modules: ES6 + Webpack2
        - export: export the functions/function from one JS script

        ```jsx
        // js1 (add.js)
        // could export multiple functions at a time
        export const add = (a, b) => a + b;
        // export only 1 function
        export default function add(a, b) {
            return a + b;
        ```

        - import: import functions/a function into another JS script

        ```jsx
        // import from js1
        // could import multiple functions at a time
        import {add} from './add'

        // import 1 function when using 'default' keyword
        import add from './add'
        ```

        - ES modules Config file: bundle all JS scripts into one JS file according to dependencies through traversing the dependency tree

        ```jsx
        // ES Modules config file example
        module.exports = {
            entry: './app/main.js',
            output: {
                path: './dist',
                // bundle all the scripts (and their dependencies into a bundle file)
                filename: 'bundle.js' // bundle all related js scripts into one file
            }
        }
        ```