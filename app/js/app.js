/**
 * Begin Variables
*/

// Item counter
let itemNumber = 1;
let todolist = document.querySelector('#todo-list'); // Selecting the todo list ul to be modified by adding the an li for each section.

/**
 * Begin Main Functions
*/

// A method that will add the Todo item to the list.
function addTodoItem(evt) {

    evt.preventDefault(); // Preventing the default action (which is for the button to jump to itself based on href='#') - Is there a better way to do that?

    // Extracting the todo item entered by the user in the form.
    const itemText = document.getElementById('todo-input').value;

    if (itemText !== "") { // If the box is not empty and the add button is clicked
        //       < !--todo item structure - to be created by js-- >

        //   < !-- < div class="todo-item-container" >
        //     <li class="todo-item"></li>
        //     <button class="check-teim">
        //       <i class="fas fa-check-square"></i>
        //     </button>
        //     <button class="delete-item">
        //       <i class="fas fa-trash-alt"></i>
        //     </button>
        //   </div > -->

        // Creating the check button
        const newCheckButton = document.createElement('button');
        newCheckButton.innerHTML = `<i class="far fa-square"></i> `;
        newCheckButton.setAttribute('id',`item_${itemNumber}_check`);
        newCheckButton.setAttribute('class',"btn check-item");

        // Creating the delete button
        const newDeleteButton = document.createElement('button');
        newDeleteButton.innerHTML = `<i class="fas fa-trash-alt"></i>`;
        newDeleteButton.setAttribute('id',`item_${itemNumber}_delete`);
        newDeleteButton.setAttribute('class',"btn delete-item");

        // Creating the li element
        const newTodoItem = document.createElement('li');
        newTodoItem.setAttribute('class',"todo-item unchecked-todo-item");
        newTodoItem.setAttribute('id',`item_${itemNumber}`);
        newTodoItem.innerHTML = itemText + newCheckButton.outerHTML + newDeleteButton.outerHTML;

        todolist.appendChild(newTodoItem);

            // var itemToBeAdded = `<li class="unchecked-todo-item">${itemText}
            //     <button id = "item_${itemNumber}_check" class="btn check-item">
            //         <i class="far fa-square"></i>    
            //     </button>
            //     <button id = "item_${itemNumber}_delete" class="btn delete-item">
            //         <i class="fas fa-trash-alt"></i>
            //     </button>
            //     </li>`;


        // document.getElementById('todo-list').innerHTML += itemToBeAdded;

        itemNumber++;
    }
}


// A function that detects the button clicked and acts accordingly.
function respondToTheClick(evt) {

    evt.preventDefault(); // Preventing the default action (which is for the button to jump to itself based on href='#') - Is there a better way to do that?

    const clickedBtnID = evt.target.id; // Extracting the id of the button clicked.

    // Now that we detect the clicks on the buttons, we need to indentify wheather it is a delete click or check click.
    if (clickedBtnID.endsWith("delete"))
    {
        // removing the '_delete' from the id to get the id of the todo item that we need to delete.
        const idOfTodoItem = clickedBtnID.substring(0, clickedBtnID.length - 7);
        deleteTodoItem(idOfTodoItem); // Calling the delete method to act on the todo item with the extracted id.
    } else if (clickedBtnID.endsWith("check"))
    {
        // removing the '_check' from the id to get the id of the todo item that we need to check.
        const idOfTodoItem = clickedBtnID.substring(0, clickedBtnID.length - 6);
        toggleCheckTodoItem(idOfTodoItem); // Calling the check method to act on the todo item with the extracted id.
    }
}


// A function to delete the Todo item knowing its id.
function deleteTodoItem(idOfTodoItem){
    todolist.removeChild(document.getElementById(idOfTodoItem));
}

/**
 * A function to check the Todo item knowing its id.
 * 
 * We want to do two changes: (1) change the class to be checked instead of unchecked. (2) Change the content to have the
 * checked box instead of the empty box. 
 **/
function toggleCheckTodoItem(idOfTodoItem){

    let todoItem = document.querySelector(`#${idOfTodoItem}`); // Selecting the element of the todo item to be modified.

if (todoItem.classList.contains("unchecked-todo-item"))
{
    // Modify the classes.
    todoItem.classList.remove("unchecked-todo-item");
    todoItem.classList.add("checked-todo-item");

    /**
     * Replace the unchecked button with the checked button
     **/ 

    // First, we create the new button element that we will use to replace the unchecked element.

    const checkedButton = document.createElement('button');
    checkedButton.innerHTML = `<i class="fas fa-check-square"></i>`;
    checkedButton.setAttribute('id',`${idOfTodoItem}_check`);
    checkedButton.setAttribute('class',"btn check-item");

    // Now replace the unchecked button with this new button
    document.querySelector(`#${idOfTodoItem}_check`).replaceWith(checkedButton);

} else if (todoItem.classList.contains("checked-todo-item"))
{
    // Modify the classes.
    todoItem.classList.remove("checked-todo-item");
    todoItem.classList.add("unchecked-todo-item");

    // First, we create the new button element that we will use to replace the unchecked element.

    const uncheckedButton = document.createElement('button');
    uncheckedButton.innerHTML = `<i class="far fa-square"></i> `;
    uncheckedButton.setAttribute('id',`${idOfTodoItem}_check`);
    uncheckedButton.setAttribute('class',"btn check-item");


    // Now replace the unchecked button with this new button
    document.querySelector(`#${idOfTodoItem}_check`).replaceWith(uncheckedButton);

}
}


/**
 * Begin Events
*/

// Event Listener for the 'todo-button' click
document.querySelector('#todo-button').addEventListener('click', addTodoItem);


// Event Listener for the delete button
document.querySelector('#todo-list').addEventListener('click', respondToTheClick);
