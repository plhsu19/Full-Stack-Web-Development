var fun = 'global gun';

function firstfunc() {
    function sencondfunc(){
        console.log(fun);
    }
}

firstfunc();