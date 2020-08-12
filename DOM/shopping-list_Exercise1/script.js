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


