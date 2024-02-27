const addnew = document.getElementById("addnote").addEventListener('click', function(){ addnote ()});
//declaring
const note = document.getElementById('note');
const savebtn = document.createElement('button').addEventListener('click', savedata)
savebtn.classList.add('#save');
savebtn.textContent = 'save';

function addnote (){
    

    //creating note 
    const notebody = document.createElement('div');
    notebody.classList.add('notes-body')   

 notebody.innerHTML = `<div class="notes-body">
<div class="button-wrapper">
<button id="remove">X</button>
<button id="save">save</button>
</div>

<input id="note" type="text" >
</div>`
//appending the note

const textenterd = notebody.lastChild.value;
const savebtn = document.createElement('button').addEventListener('click', function(){
    const textenterd = notebody.querySelector('input').value;
    userdata = localStorage.setItem('data' , JSON.stringify(textenterd))
     
})
savebtn.classList.add('save');
savebtn.textContent = 'save';


notebody.appendChild(savebtn);
console.log(notebody)
note.appendChild(notebody);  
//saving data 

// localStorage.setItem(JSON.stringify('note', ))
console.log(textenterd)


};
