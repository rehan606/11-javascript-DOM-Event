//Method-2:
function makeRed(){
    document.body.style.backgroundColor='red';
}

//Method-3:
const blueButton = document.getElementById('make-blue');
blueButton.onclick = makeBlue
function makeBlue(){
    document.body.style.backgroundColor='blue';
}

//Method-3.1
const purpleButton = document.getElementById('make-purple');

purpleButton.onclick = function makePurple(){
    document.body.style.backgroundColor='purple';
}

//Method-4: using Add Event Listener.

const pinkButton = document.getElementById('make-pink')
pinkButton.addEventListener('click', makePink)

function makePink(){
    document.body.style.backgroundColor='pink'
}

//Method-4.1:
const greenButton = document.getElementById('make-green');
greenButton.addEventListener('click', function makeGreen(){
    document.body.style.backgroundColor='green';
})

//Method-4.2: Regular Use
document.getElementById('make-golden').addEventListener('click', function(){
    document.body.style.backgroundColor='goldenrod'
})

//----------------------------------------------------------


/*======================================
 Most Common Ways to set event handeler--
======================================= */

// change text using Button Click : Method-1:

function changeText(){
    const updateText = document.getElementById('defaultText');
    updateText.innerText = 'This is updated Text by Function'
}

// Method-2:

document.getElementById('event-listener').addEventListener('click', function(){
    const change = document.getElementById('default');
    change.innerText = ' Change by EventListener'
})




/*===================================================
            Update Text From Input Field
===================================================*/

document.getElementById('btn-update').addEventListener('click', function(){
    const inputField = document.getElementById('input-field');
    const inputText = inputField.value

    const paragaraph = document.getElementById('display-inputText')
    paragaraph.innerText = inputText
    inputField.value =' ';
})


/*===================================================
        Create A Comment And Display Comment
===================================================*/
document.getElementById('btn-comment').addEventListener('click', function(){
    const commentBox = document.getElementById('textArea')
    const comment = commentBox.value;

    const commentContainer = document.getElementById('comment-container');
    const paragaraph = document.createElement('p')
    paragaraph.innerText = comment;
    commentContainer.appendChild(paragaraph);

    commentBox.value = ' ';
})

/*===================================================
        Delete Confirmation Button
===================================================*/

document.getElementById('delete-confirm').addEventListener('keyup',function(event){
    const text = event.target.value;
    const deleteButton = document.getElementById('btn-delete');

    if(text === 'delete'){
        deleteButton.removeAttribute('disabled')
    } else{
        deleteButton.setAttribute('disabled', true)
    }
})


/*===================================================
        Event Delegate and Event Bubble
===================================================*/

document.getElementById('list-container').addEventListener('click', function(event){
    event.target.parentNode.removeChild(event.target)
})

document.getElementById('btn-add-item').addEventListener('click', function(){
    const listContainer = document.getElementById('list-container');
    const li = document.createElement('li')
    li.innerHTML = 'Add New Item';
    li.classList.add('item')

    listContainer.appendChild(li)
})

