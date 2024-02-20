//selectors
const form = document.querySelector(".form");

form.addEventListener('submit', getData)

function getData (e) {
    
    e.preventDefault()
    
    let name = e.target.name.value;
    let email = e.target.email.value;
    let number = e.target.number.value;
    
    let userdata = [

        'name' = name,
        'email' = email,
        'number' = number

    ];

   var userdetail = localStorage.setItem('dataAll', JSON.stringify(userdata));
}

getData();

