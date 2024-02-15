const endDate = '18 feb 2024 10:00 PM';
// const fixeddate = document.getElementById('datefixed').innerText = endDate;
const iseconds = document.getElementById('seconds');
const iminutes = document.getElementById('minutes');
const ihours = document.getElementById('hours');
const idays = document.getElementById('days');




function clock(){
    const end = new Date(endDate);
    const now = new Date();
    const diff = end-now;
    console.log(diff)
    //converting miliseconds to seconds
    const seconds = diff / 1000;
    console.log(seconds)
    //converting seconds to minutes
    const minutes = seconds / 60;
    console.log(minutes)
    //converting minutes to hours
    const hours = minutes / 60;
    console.log(hours)
    //converting hours to days
    const days = hours / 24;
    console.log(days)
    
}
clock();
