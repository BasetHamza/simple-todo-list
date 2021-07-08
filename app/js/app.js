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
        newCheckButton.setAttribute('class',"btn");
        newCheckButton.setAttribute('class',"check-item");

        // Creating the delete button
        const newDeleteButton = document.createElement('button');
        newDeleteButton.innerHTML = `<i class="fas fa-trash-alt"></i>`;
        newDeleteButton.setAttribute('id',`item_${itemNumber}_delete`);
        newDeleteButton.setAttribute('class',"btn");
        newDeleteButton.setAttribute('class',"delete-item");

        // Creating the li element
        const newTodoItem = document.createElement('li');
        newTodoItem.setAttribute('class',"unchecked-todo-item");
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
        const idOfTodoItem = clickedBtnID.substring(0, clickedBtnID.length - 7); // removing the '_btn' from the id to get the section id we need to navigate to and make "active".
        deleteTodoItem(idOfTodoItem);
    } else if (clickedBtnID.endsWith("check"))
    {
        console.log("check");
            // <i class="fas fa-check-square"></i>

    }
}


// A function to delete the Todo item knowing its id.
function deleteTodoItem(idOfTodoItem){
    todolist.removeChild(document.getElementById(idOfTodoItem));
}

/**
 * Begin Events
*/

// Event Listener for the 'todo-button' click
document.querySelector('#todo-button').addEventListener('click', addTodoItem);


// Event Listener for the delete button
document.querySelector('#todo-list').addEventListener('click', respondToTheClick);
