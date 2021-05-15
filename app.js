//variables
const btn = document.querySelector('.btn');
const textArea = document.querySelector('.textArea');
const container = document.querySelector('.container');

//Eventlisteners
btn.addEventListener('click',() => {
    addNewNote();
});

//functions
function addNewNote(){
    const noteText = textArea.value;
    const notes = document.createElement('div');
    notes.classList.add('notes');
    const htmlData = `
    <div class="tools" id="tools">
                    <button class="edit"><i class="far fa-edit"></i></button>
                    <button class="delete"><i class="far fa-trash-alt"></i></button>
                </div>
                <div class="main">
                    <textarea class="textArea"></textarea>
                </div>
    `;
    
}