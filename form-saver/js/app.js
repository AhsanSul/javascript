//selectors
const form = document.querySelector(".form");
let main = document.getElementById('main');



form.addEventListener('submit', getData)

function getData (e) {
    
    e.preventDefault()
    
    let name = e.target.name.value;
    let email = e.target.email.value;
    let number = e.target.number.value;
    
    // let userdata = {

    //     'name' : name,
    //     'email' : email,
    //     'number' : number

    // };
    datauser = JSON.parse(localStorage.getItem("userdata")) ?? [];
    datauser.push({
        'name' : name,
        'email' : email,
        'number' : number

    });
    console.log(datauser)
    
   var userdetail = localStorage.setItem('userdata', JSON.stringify(datauser));
   e.target.reset();
   showdata();
   
}


function showdata () {
    
    datauser = JSON.parse(localStorage.getItem("userdata")) ?? [];
 
    let finalData = '';

    datauser.forEach( (element,i) => {

        finalData += `
        <div class="item">
        <span onclick= "removedata">X</span>
        <h2>Name</h2>
        <div>${element.name}</div>
        <h2>E-mail</h2>
        <div>${element.email}</div>
        <h2>Number</h2>
        <div>${element.number}</div>
        
        </div>`
        main.innerHTML = finalData
        
    });
    
    console.log(finalData)

}

let removedata=(index)=> {
    datauser = JSON.parse(localStorage.getItem("userdata")) ?? [];
    datauser.splice(index,1)
    var userdetail = localStorage.setItem('userdata', JSON.stringify(datauser));
}

showdata();

