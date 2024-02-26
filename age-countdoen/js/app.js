const DoB = document.getElementById("dateofbirth");
const btn = document.getElementById('btn').addEventListener('click', gettingDate)
const year = document.getElementById('years');
const month = document.getElementById('months');
const day = document.getElementById('days');
const hour = document.getElementById('hours');
const minute = document.getElementById('minutes');
const second = document.getElementById('seconds');
const setting = document.getElementById("icon").addEventListener('click', settingtoggle);
let toogle = document.getElementById('toogle');
let togglebutton = true;



//age calculation function

function gettingDate(){
    const currentdate = new Date();
    console.log(currentdate);
    const ybys = 1000 * 60 * 60 * 24 * 365;
    
    let newDob = new Date(DoB.value);
    console.log(newDob);

    const diff = Math.floor(currentdate - newDob);
    console.log(diff)

    //getting seconds 
    const seconds = Math.floor((diff / 1000) % 60);
    second.innerHTML = seconds;
    //getting minutes by seconds
    const minutes = Math.floor(diff / (1000 * 60) % 60);
    minute.innerHTML = minutes;
    //getting hours by minutes
    const hours = Math.floor(diff / (1000 * 60 * 60) % 24);
    hour.innerHTML = hours;
    //getting days by hours
    const days = Math.floor((diff / (1000 * 60 * 60 * 24)) % 30);
    day.innerHTML = days;
    // getting months by days
    const months = Math.floor((diff / (1000 * 60 * 60 * 24 * 365)) % 12);
    month.innerHTML = months;
    //getting years
    const years = Math.floor(diff / ybys);
    year.innerHTML = years;

    localStorage.setItem('days', days);
    localStorage.setItem('months', months);
    localStorage.setItem('years', years);
    

//     const savedmonth = localStorage.getItem("months")
// const savedyears = localStorage.getItem("years")
// const saveddays = localStorage.getItem("days")


// year.innerHTML = savedyears;
// month.innerHTML = savedmonth;
// day.innerHTML = saveddays;
}


// // saving data

function displaydata () {


const savedmonth = localStorage.getItem("months")
const savedyears = localStorage.getItem("years")
const saveddays = localStorage.getItem("days")


year.innerHTML = savedyears;
month.innerHTML = savedmonth;
day.innerHTML = saveddays;

}


// toogle function

function settingtoggle(){
    
    if(togglebutton == true){

        toogle.classList.add("hidden")

    }else{
        toogle.classList.remove("hidden")
    }

    togglebutton = !togglebutton;
    
}
settingtoggle();


