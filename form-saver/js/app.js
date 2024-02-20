//selectors
const form = document.querySelector(".form");
let main = document.getElementById('main');


form.addEventListener('submit', getData)

function getData (e) {
    
    e.preventDefault()
    
    let name = e.target.name.value;
    let email = e.target.email.value;
    let number = e.target.number.value;
    
    let userdata = {

        'name' : name,
        'email' : email,
        'number' : number

    };

   var userdetail = localStorage.setItem('datauser', JSON.stringify(userdata));
}


function showdata () {
    var userdetail = localStorage.setItem('datauser', JSON.stringify(userdata));
 
 
  main.innerHTML  = `<span>X</span>
                        <h2>Name</h2>
                        <div>${userdata.name}</div>
                        <h2>E-mail</h2>
                        <div>${userdata.email}</div>
                        <h2>Number</h2>
                        <div>${userdata.number}</div>`

}

