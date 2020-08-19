var dataBase = [
    {
        username: "Panda",
        password: "mikichan112"
    },
    {
        username: "Ice Bear",
        password: "icebear"
    },
    {
        username: "Grizzly",
        password: "hamburger"
    }
];

var newsFeed = [
    {
        username: 'Ice Bear',
        timeline: 'Ice bear wants some fish'
    },
    {
        username: 'Grizzly',
        timeline: 'It\'s getting hot out there~~~'
    },
    {
        username: "Panda",
        timeline: "looking for a dating partner : )"
    }
];

function isValid(user, pass) {
    for (var i = 0; i < dataBase.length; i++) {
        if (user === dataBase[i].username && pass === dataBase[i].password) {
            return true;
        }
    }
    return false;
}

function signIn(user, pass) {
    if (isValid(user, pass)) {
        console.log(newsFeed);
    } else {
        alert('Sorry, wrong username or pass word!')
    }
}


var user = prompt('Enter the username: ');
var pass = prompt('Enter the password: ');

signIn(user, pass);