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
const passbox = document.getElementById('password-feild');

//functions
function getRandomNumber (dataset) {

    return dataset[Math.floor(Math.random() * dataset.length)]

}

function generatePassword (password = "") {

    if(upperinput.checked) {
        password+= getRandomNumber(uppercase)
    }
    if(lowerinput.checked){
        password+= getRandomNumber(lowercase)
    }
    if(numberinput.checked){
        password+= getRandomNumber(numbers)
    }
    if(symbolinput.checked){
        password+= getRandomNumber(symbols)
    }
    if(password.length < lengthinput.value) {
        return generatePassword(password);
    }
    console.log(truncateString(password, lengthinput.value))
//    passbox.innerText = truncateString(password, lengthinput.value);

}
generatePassword()

document.getElementById('btn').addEventListener(
    "click" ,
    function () {
        generatePassword();
    } );



    function truncateString(str, num) {
        if (str.length > num) {
          return str.slice(0, num);
        } else {
          return str;
        }
      }