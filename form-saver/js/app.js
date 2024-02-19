//selectors
const form = document.querySelector(".form");

form.addEventListener('submit', getData)

function getData (e) {
    
    e.preventDefault()
    
    let name = e.target.name.value;
    let email = e.target.email.value;
    let number = e.target.number.value;
    console.log(name, email, number)
    


}

getData();

