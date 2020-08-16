function isValid(bool) {
    return bool;
}
// var passWord = isValid(true) ? '1234' : 'access denied';

var passRequest = 'your password is: ' + (isValid(false) ? '1234' : 'access denied');
console.log(passRequest);

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