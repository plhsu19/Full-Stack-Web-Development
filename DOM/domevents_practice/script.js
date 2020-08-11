var button = document.getElementById('enter');
var input = document.getElementById('userinput');
var ul = document.querySelector('ul');
var li = document.getElementsByTagName('li');
// var toggle = false;



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

function addRemoveToggle(event) {
    // console.log(event.target.classList);
    event.target.classList.toggle('done');
}

button.addEventListener('click', addListAfterClick);
input.addEventListener('keypress', addListAfterKeypress);
ul.addEventListener('click', addRemoveToggle);


