

//functions

function colorGenerator(){
    const randomnumber = Math.floor(Math.random() * 16777215);
    //random code geerator
    const randomcode = "#" + randomnumber.toString(16);
    const main = document.getElementById('main').style.backgroundColor = randomcode;
    const colorCode = document.getElementById('color-code').innerText = randomcode;
    const heading = document.getElementById('heading').style.color = randomcode;
    const button = document.getElementById('btn').style.backgroundColor = randomcode;
}

//initial call
colorGenerator();

//event listners
const button = document.getElementById('btn').addEventListener('click', colorGenerator)