//variables for input 

const input = document.querySelector('#inputBox');
const submit = document.querySelector('.inputBtn');
let inputVal = '';



// Add item function

function addItem() {

    const list = document.createElement('ul');
    list.id = '#list';
    const dFrag = document.createDocumentFragment();
    const listItem = document.createElement('li');
    const textSpan = document.createElement('span');    

   
    textSpan.className = 'list-text';
    textSpan.textContent = inputVal;
    listItem.appendChild(textSpan);



    /* creates buttons in the to-do list item */
    const buttonsSpan = document.createElement('span');
    buttonsSpan.className = 'list-buttons';
    const checkBtn = document.createElement('button');
    checkBtn.className = 'check';
    checkBtn.innerHTML = `<i class="fa-solid fa-check"></i>`;
    buttonsSpan.appendChild(checkBtn);
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete';
    deleteBtn.innerHTML =  `<i class="fa-solid fa-trash"></i>`;
    buttonsSpan.appendChild(deleteBtn);



    /* appends buttons to list items */

    listItem.appendChild(buttonsSpan);

    /* appends list items to fragment document */

    dFrag.appendChild(listItem);

    /* appends document fragment to unordered list */

    list.appendChild(dFrag);

    document.body.appendChild(list)




    //adds check and delete buttons functionality

    checkBtn.addEventListener('click', function () {

        textSpan.style.textDecoration = 'line-through';

    })


    // delete list item
    deleteBtn.addEventListener('click', function() {
        
        this.parentElement.parentElement.parentElement.remove();
        
    })

}

 // adds list item
    submit.addEventListener('click', function(e) {


        if (input.value) {
            inputVal = input.value;
            input.value = '';
        
            addItem();

            input.focus();
        } else {
            alert('Enter an input')
        }
    
    })

    submit.addEventListener('keydown', function() {
        if (e.key === 'Enter') {
            e.preventDefault();
            submit.click();
        }
    })

/*  removed this: cause slow response to click likely due to capturing and bubbling
   
   listItem.addEventListener('click', function (e) {

        let target = e.target;
        if (target.classList.contains('check')) {
            textSpan.classList.toggle('done');
        }
        
        if(target.classList.contains('delete')) {
            this.remove(listItem);
        }

    }) */

