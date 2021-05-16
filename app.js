//variables
const btn = document.querySelector('.btn');
const container = document.querySelector('.container');

//Eventlisteners
btn.addEventListener('click',() => {
    addNewNote();
});

//functions
function addNewNote(text){
    const notes = document.createElement('div');
    notes.classList.add('notes');
    const htmlData = `
    <div class="tools" id="tools">
                    <button id="edit"><i class="far fa-edit"></i></button>
                    <button class="delete"><i class="far fa-trash-alt"></i></button>
                </div>
                <div class="main">
                    <textarea class="textArea"></textarea>
                </div>
    `;
    notes.insertAdjacentHTML('afterbegin',htmlData);

const editButton = document.querySelectorAll('#edit');
const deleteBtn = document.querySelector('.delete');
const textArea = document.querySelector('.textArea');
const main = document.querySelector('.main');
console.log(editButton);

editButton.addEventListener('click',display);
function display(){
    console.log('hii');
}

    container.appendChild(notes);
}
