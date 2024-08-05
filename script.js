   document.addEventListener('DOMContentLoaded', ()=>
{ 
   document.title = "TO DO LIST ";
    const inp = document.getElementById('item');
    let addelement = document.getElementById('addbtn');
    let list = document.getElementById('list');
    addelement.addEventListener('click',() =>
        {
            if(inp.value !== '')
            {
            let checkbox = document.createElement('span');
            checkbox.className = "checkbox";
            console.log("clicked");
            let elem = document.createElement('li');
            let content = document.createElement('span');
            content.textContent = inp.value;

            elem.appendChild(checkbox);
            elem.appendChild(content);
            list.appendChild(elem);}
            else
            {
                alert("please enter something");
            }
            inp.value = '';
        });
    let chkbtn = document.getElementsByClassName()
        
    })