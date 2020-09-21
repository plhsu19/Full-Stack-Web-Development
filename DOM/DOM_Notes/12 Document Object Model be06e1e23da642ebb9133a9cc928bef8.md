# 12. Document Object Model

- DOM (Document Object Model):

    a. Wiki: The Document Object Model (DOM) is a interface that treats a **HTML document** as a tree structure wherein each **node is an object representing a part of the document.** The DOM represents a document with a logical tree. Each branch of the tree ends in a node, and each node contains objects. DOM methods allow programmatic access to the tree; with them one can **change the structure, style or content of a document.** Nodes can have **event handlers** attached to them. Once an **event** is triggered, the event handlers get executed.

    b. Codecademy: 

    - The DOM is a structural model of a web page that allows for scripting languages to access that page.
    - The system of organization in the DOM mimics the nesting structure of an HTML document.
    - Elements nested within another are referred to as the children of that element. The element they are nested within is called the parent element of those elements.
    - The DOM also allows access to the regular attributes of an HTML element such as its style, id, etc.

    ![12%20Document%20Object%20Model%20be06e1e23da642ebb9133a9cc928bef8/Untitled.png](12%20Document%20Object%20Model%20be06e1e23da642ebb9133a9cc928bef8/Untitled.png)

    ![12%20Document%20Object%20Model%20be06e1e23da642ebb9133a9cc928bef8/Screen_Shot_2020-08-07_at_12.05.04_PM.png](12%20Document%20Object%20Model%20be06e1e23da642ebb9133a9cc928bef8/Screen_Shot_2020-08-07_at_12.05.04_PM.png)

    ![12%20Document%20Object%20Model%20be06e1e23da642ebb9133a9cc928bef8/Screen_Shot_2020-08-07_at_12.23.52_PM.png](12%20Document%20Object%20Model%20be06e1e23da642ebb9133a9cc928bef8/Screen_Shot_2020-08-07_at_12.23.52_PM.png)

    ![12%20Document%20Object%20Model%20be06e1e23da642ebb9133a9cc928bef8/Screen_Shot_2020-08-07_at_12.29.05_PM.png](12%20Document%20Object%20Model%20be06e1e23da642ebb9133a9cc928bef8/Screen_Shot_2020-08-07_at_12.29.05_PM.png)

- Javascript engine: The engine that reads/executes the JS file line by line
1. **document (object)**: 

    A JS object that browser creates to allow us to change, add, delete HTML elements (to access the DOM through Javascript object "document").

    - The document object decides/specifies what should be display on the window
    - To decide what to display, the document object (DOM) will read HTML and CSS from the server/local
    - When ever the javascript needs to change the display, it will access the document object and change HTML and CSS to be display on the window (which is read/executed by JS engines).

    ```jsx
    document.write("Hello Change World!")
    ```

    ![12%20Document%20Object%20Model%20be06e1e23da642ebb9133a9cc928bef8/Screen_Shot_2020-08-07_at_11.06.37_AM.png](12%20Document%20Object%20Model%20be06e1e23da642ebb9133a9cc928bef8/Screen_Shot_2020-08-07_at_11.06.37_AM.png)

    - The area of document is the whole browser window.
2. **window (object)**: The parent object that include every things, ie, functions, objects, and describe the browser
    - window also includes document object.
    - all the functions that are not specified will be assumed to be a window's function.
3. Position of the <script> link: 

    The old convention was to put scripts right before the </body> tag to prevent the script from blocking the rest of the HTML content. Now, the convention is to put the script tag in the **<head> element and to use the defer and async attributes.**

4. DOM Selectors
    - getElementsByTagName
    - getElementsByClassName
    - getElementById

    ```jsx
    document.getElementsByTagName('img');
    document.getElementsByTagName('img')[0];
    document.getElementsByClassName('ctr-p');
    document.getElementsByClassName('ctr-p')[2];
    document.getElementById('hplogo');
    ```

    - querySelector:  elements names are same as css selectors
    - querySelectorAll

    ```jsx
    document.querySelectorAll('img');
    document.querySelector('img');
    document.querySelectorAll('img, input');
    document.querySelector('.Uo8X3b'); //select class
    document.querySelector('#searchform'); //select ID
    ```

    - getAttribute
    - setAttribute

    ```jsx
    document.querySelector('input').getAttribute('type');
    document.querySelectorAll('input')[8].setAttribute('value', 'I\'m feeling super');
    ```

    ### Change Styles:

    - style.{property}

    ```jsx
    document.querySelector('#searchform').style;
    document.querySelector('p').style.fontWeight='bold';
    ```

    - **className** //recommended

    ```jsx
    h1 = document.querySelector('h1');
    h1.className='coolTitle';
    ```

    - **classList** //recommended

    ```jsx
    document.querySelector('li').classList.add('coolTitle');
    document.querySelector('li').classList.remove('coolTitle');
    document.querySelector('li').classList.toggle('done');
    ```

    - innerHTML

    ```jsx
    document.querySelector('h1').innerHTML = "<strong>!!!!!</strong>"
    ```

    - parentElement
    - children

    ```jsx
    document.querySelectorAll('li')[1].parentElement.parentElement;
    document.querySelectorAll('li')[1].parentElement.parentElement.children;
    ```

    ### It is important to CACHE selectors in variables (to save time and space)

    ```jsx
    var li1 = document.querySelectorAll('li')[1];
    li;
    -> <li>Takoyaki</li>
    ```

5. DOM Event
    - mouse events: click, mouseenter, mouseleave

        addEventListener()

    ```jsx
    var button = document.getElementsByTagName('button')[0];

    button.addEventListener('click', function() {
    	console.log('click!');
    })

    button.addEventListener('mouseleave', function() {
    	console.log('click!');
    })
    ```

    - event.target: the element that event 'click' is triggered
    - event.currentTarget: refers to the element to which the event handler has been attached
    - createElement()
    - appendChild()
    - createTextNode():  create the child text node

    ```jsx
     button.addEventListener('click', function() {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode('Testing'));
        ul.appendChild(li);
    })
    ```

    - cache all the element object(value) that going to be needed into variables:

        input.value

        button

        ul

    ```jsx
    var button = document.getElementById('enter');
    var input = document.getElementById('userinput');
    var ul = document.querySelector('ul');

    button.addEventListener('click', function() {
        if (input.value.length > 0) {
            console.log(input.value);
            var li = document.createElement('li');
            li.appendChild(document.createTextNode(input.value));
            ul.appendChild(li);  
            input.value = '';  
        }
    })
    ```

    - keyboard **event**: 'keypress'

        Will generate and pass an **event** to the callback function in addEventListener

    - event of 'keypress'
        - event.**keyCode: 13(enter)**
        - event.which

    ```jsx
    // original code
    input.addEventListener('keypress', function (event) {
        if (input.value.length > 0 && event.keyCode === 13) {
            console.log(input.value);
            var li = document.createElement('li');
            li.appendChild(document.createTextNode(input.value));
            ul.appendChild(li);
            input.value = '';
        }
    }
    )
    ```

    ```jsx
    //after modulized and simplified the codes

    var button = document.getElementById('enter');
    var input = document.getElementById('userinput');
    var ul = document.querySelector('ul');

    function inputLength() {
        return input.value.length
    }

    function addList() {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = '';
    }

    function addListAfterClick() {
        if (inputLength() > 0) {
            addList();
        }
    }

    function addListAfterKeypress(event) {
        if (inputLength() > 0 && event.keyCode === 13) {
            addList();
        }
    }

    button.addEventListener('click', addListAfterClick);

    input.addEventListener('keypress', addListAfterKeypress);
    ```

6. **Callback function**:

    Passing a reference of a function (addListAfter) to another function (addEventListener) without running it immediately, but get runs when the event is happened.

    ```jsx
    button.addEventListener('click', **addListAfterClick**);
    ```

     ⇒ do not add () to the callback function. Pass the reference of the function only.

### Exercise1 shopping list:

~~1. If you click on the list item, it toggles the .done class on and off.~~

~~2. Add buttons next to each list item to delete the item when clicked on its corresponding delete button.~~

~~3. BONUS: When adding a new list item, it automatically adds the delete button next to it (*hint: be sure to check if new items are clickable too!*)~~

- functions used:
    - event.target: node the event is triggered
    - node.parentNode
    - node.classList: an iterator contains all the classes of the node
    - node.removeChild(childNode)
    - node.appendChild(childNode)
    - document.createElement('HTML element tag name')
    - document.createTextNode('text string')
    - node.classList.toggle('class name string')
- Interactive application:
    - event driven: about **waiting for** and **reacting** to events, to alter the behaviour of the browser in some way. Events occur whenever something happens on a page based on user interaction.
    - To react to an event you listen for it and supply a function which will be called by the browser when the event occurs. This function is known as a callback

```jsx
var button = document.getElementById('enter');
var input = document.getElementById('userinput');
var ul = document.querySelector('ul');
var li = document.getElementsByTagName('li');
// var toggle = false;

function inputLength() {
    return input.value.length
}

function addList() {
    var li = document.createElement('li'); //create element in document
    li.appendChild(document.createTextNode(input.value));// append text node in an element
    addButton(li);
    ul.appendChild(li);
    input.value = ''; //clean the input value after list is added
}

function addListAfterClick() {
    if (inputLength() > 0) {
        addList();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        addList();
    }
}

function addRemoveToggle(event) {
    // console.log(event.target.classList);
    event.target.classList.toggle('done');
}

function addButton(list) {
    var bu = document.createElement('button');
    bu.appendChild(document.createTextNode('delete'));
    list.appendChild(bu);
    bu.addEventListener('click', deleteListItem);
}

function deleteListItem(event) {
    var listToRemoved = event.target.parentNode; //list element to be removed
    listToRemoved.parentNode.removeChild(listToRemoved);//go up to list's parent node (ul) to remove the target list element (child: p + button)
}

// operations start
button.addEventListener('click', addListAfterClick);
input.addEventListener('keypress', addListAfterKeypress);
ul.addEventListener('click', addRemoveToggle);

// add a button to each list item, and delete the item when click on the button
// concept: add a button child to the list parent node: p + button
// concept2: add a listener to the button to perfrom the function that remove the item and itself when being click on
for (var i = 0; i < li.length; i++) {
    addButton(li[i]);
}
```

### Exercise 2 Gradient background:

- event "input": The input event fires when the value of an <input>, <select>, or <textarea> element has been changed.
- element.style: it returns a CSSStyleDeclaration object that contains a list of all styles properties for that element with values assigned for the attributes that are defined in the element's inline style attribute.
- Setting style:

    [element.style.property](http://element.style.property) = 'property string in HTML'

- element.textContent = 'text string';
- Answer1 (standard)

```jsx
var css = document.querySelector('h3');
var input1 = document.querySelector('.input1');
var input2 = document.querySelector('.input2');
var body = document.getElementById('gradient');

// Notion
function setGradient() {
    **body.style.background = 
    'linear-gradient(to right, ' + input1.value + ', ' 
    + input2.value + ')';
    css.textContent = body.style.background + ';';**
}

// Notion
input1.addEventListener('input', setGradient);
input2.addEventListener('input', setGradient);
```

- Another Answer to implement eventListener in the HTML (not recommended)
    - mess the HTML with JS
    - can only add one eventListener to the element (setGradient())

```html
<input onclick=setGradient() class='input1' type="color" name='color' value='#00ff00'>
<input onclick=setGradient() class='input2' type="color" name='color' value='#ff0000'>
```

Additional to Exercise2:

~~1. Write code so that the colour inputs match the background generated on the first page load.~~

~~2. Display the initial CSS linear gradient property on page load.~~

3. BONUS: Add a random button which generates two random numbers for the colour inputs.

```jsx
var css = document.querySelector('h3');
var input1 = document.querySelector('.input1');
var input2 = document.querySelector('.input2');
var body = document.getElementById('gradient');

// Notion
function setGradient() {
    body.style.background = 
    'linear-gradient(to right, ' + input1.value + ', ' 
    + input2.value + ')';
    css.textContent = body.style.background + ';';
}

// operations
body.style.background = 
'linear-gradient(to right, ' + input1.value + ', ' 
+ input2.value + ')';
css.textContent = body.style.background + ';';

input1.addEventListener('input', setGradient);
input2.addEventListener('input', setGradient);
```

### JQuery

- Background:
    - many DOM manipulation methods are not compatible in different browsers
    - DOM manipulation is tidious
- Goal: make DOM manipulation easier and more compatible with all browsers
- Advantage: easy syntax
- Disadvantage: code is **imperative** (t**ell the program exactly how to do a task**), which could lead to chaos when code grows really big
- Future: Move to new query selectors in vanilla JS and React