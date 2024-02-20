//selectors
const form = document.querySelector(".form");

form.addEventListener('submit', getData)

function getData (e) {
    
    e.preventDefault()
    
    let name = e.target.name.value;
    let email = e.target.email.value;
    let number = e.target.number.value;
    

   var userdetail = localStorage.getItem('name', JSON.stringify("userdata"));
}

getData();

