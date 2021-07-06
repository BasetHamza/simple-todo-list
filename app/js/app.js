/**
 * Begin Variables
*/

// Item counter
let itemNumber = 1;

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
        var itemToBeAdded = `<div id = "item_${itemNumber}" class="todo-item-container">
            <li class="todo-item">${itemText}</li>
            <button class="check-item">
                <i class="fas fa-check-square"></i>
            </button>
            <button class="delete-item">
                <i class="fas fa-trash-alt"></i>
            </button>
        </div > `;

        document.getElementById('todo-list').innerHTML += itemToBeAdded;

        itemNumber++;
    }
}


/**
 * Begin Events
*/

// Event Listener for the 'todo-button' click
document.querySelector('#todo-button').addEventListener('click', addTodoItem);