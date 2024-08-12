   document.addEventListener('DOMContentLoaded', ()=>
{   
    show_data();
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
            content.innerHTML = inp.value;
            let cross = document.createElement('span');
            cross.className = "cross";
            cross.innerHTML = "<button>delete</button>";
            checkbox.id = "task" + list.childElementCount;
            cross.id = "cross"+list.childElementCount;
            content.className = "list_item"
            elem.appendChild(checkbox);
            elem.appendChild(content);
            elem.appendChild(cross);
            list.appendChild(elem);
            save_data();
            elem.addEventListener('click',()=>
            {
                checkbox.classList.toggle('checked_box');
                content.classList.toggle('checked_list');
                save_data();
            });
            cross.addEventListener('click',()=>
            {   
                elem.remove();
                save_data();
            })
        }
         else
            {
                alert("please enter something"); 
            }
            inp.value = '';
        });
   
    let themebtn = document.querySelector(".themes");
    themebtn.addEventListener('click',()=>
    {
        const root = document.documentElement;
        root.style.setProperty('--primary_color', '#FF8343')
        root.style.setProperty('--secondary_color', '#F1DEC6')
        root.style.setProperty('--third_color', '#179BAE')
        root.style.setProperty('--fourth_color', '#4158A6')
    })
    function save_data()
            {
                localStorage.setItem('data' , list.innerHTML);
            }       
});
function show_data()
{
    list.innerHTML = localStorage.getItem('data' || '');
}
