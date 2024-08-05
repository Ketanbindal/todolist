    const inp = document.getElementById('item');
    let addelement = document.getElementById('addbtn');
    let list = document.getElementById('list');
    addelement.addEventListener('click',() =>
        {

            console.log("clicked");
            let elem = document.createElement('Li');
            elem.textContent= inp.value;
            list.appendChild(elem);
        });