//variables
const btn = document.querySelector('.btn');
const container = document.querySelector('.container');

//Setting values to localstorage
function updateLS(){
    const note = document.querySelectorAll('.textArea');
    const notesArr = [];
    
    note.forEach((notes)=>{
        return notesArr.push(notes.value);
    });

    localStorage.setItem('notesArr',JSON.stringify(notesArr));
}

//Eventlisteners
btn.addEventListener('click',() => {
    addNewNote();
});

//functions
function addNewNote(text = ''){

    const notes = document.createElement('div');
    notes.classList.add('notes');
    
    const htmlData = `
    <div class="tools" id="tools">
                    <button class="edit"><i class="far fa-edit"></i></button>
                    <button class="delete"><i class="far fa-trash-alt"></i></button>
                </div>
                <div class="main ${text?'':'none'}"></div>
                <textarea class="textArea ${text?'none':''}"></textarea>
                
    `;
    notes.insertAdjacentHTML('afterbegin',htmlData);

    const editBtn = notes.querySelector('.edit');
    const deleteBtn = notes.querySelector('.delete');
    const textArea = notes.querySelector('.textArea');
    const main = notes.querySelector('.main');

    editBtn.addEventListener('click',()=>{
        textArea.classList.toggle('none');
        main.classList.toggle('none');
    });

    textArea.value = text;
    main.innerHTML = '<p>'+text+'</p>';

    //activating delete button
    deleteBtn.addEventListener('click',()=>{
        notes.remove();
        updateLS();
    });

    textArea.addEventListener('change', (e) => {
        const value = e.target.value;
        main.innerHTML = '<p>'+value+'</p>';
        //updating localstorage on every change
        updateLS();
    });

    //Appending items to document
    container.appendChild(notes);
}

//Getting values from localstorage
const notesArr = JSON.parse(localStorage.getItem('notesArr'));
if(notesArr){
    notesArr.forEach((notes) => {
        addNewNote(notes);
    });
}
