//database
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercase = 'abxdefghijklmnopqrestuvwxyz';
const numbers = '1234567890';
const symbols = '!@#$%^&*_()+-/';

//selectors

const upperinput = document.getElementById('upper-case');
const lowerinput = document.getElementById('lower-case');
const numberinput = document.getElementById('number');
const symbolinput = document.getElementById('symbol');
const lengthinput = document.getElementById('pass-length');


function getRandomNumber (dataset) {

    return dataset[Math.floor(Math.random() * dataset.length)]

}

function generatePassword (password = "") {

    if(upperinput.checked) {
        password+= getRandomNumber(uppercase)
    }
    console.log(password)

}