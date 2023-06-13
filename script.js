// Create a simple todo list that has the following functionalities
let todoList  = document.getElementById('todo_list');
let addItem = document.getElementById('addNewItem');
let buttonElement = document.getElementsByTageName("button");
console.log(buttonElement);

// To add, delete and exit new item
addButton.addEventListener("click", function(item){  
    item.preventDefault();
})

addButton.addEventListener("click", () => {
    if (newItem.value == "")
        alert("add new task")
        return;
    })

// To add new item to todo list at the top
todoListItems.prepend(newItem)

// //Function to delete new item
deleteButton.addEventListener('click', function(item){
    let newItem = deleteButton.parentNode;
    newItem.parentNode.removeChild(newItem);
    })

//To delete new item
deleteButton.addEventListener("click", function(item){
    item("removeItem")
})

let deleteButton = document.createElement('button');
deleteButton.innerHTML = '<i class="fa-solid fa-check"></i>';
deleteButton.newList.add("delete-btn");
todoDiv.appendChild(deleteButton);


//To edit new item
exitButton.addEventListener("click", function(item){
    item("exitItem");
});

//Append todo-list
todoList.appendChild(todoDiv);

//show the most recently added item 
function todoListItems(items) {
    items.forEach((item) => {
        addItem(item);
    });
}

//display items when reload
window.addEventListener('load', (item) =>{
    console.log("page is fully loaded");
});

// prevent empty values from being added to the list
if (newItem.value.trim() === "") {
    return;
}
//Reset when the add button is clicked on 
let buttonOnclick=document.getElementById('newItem').value = "";


function newitem(target){
    if (target.value== 'Add New Item'){
        target.value= "";
    }
}
//To store todo list using localStorage 
localStorage.setItem("value", "newItem");
    newItem.innerHTML = localStorage.getItem("value");

//Input field from the div
newItem = document.createElement('div'); 

 //To remove the item
 newItem.addEventListener('click', function(){
    newItem.style.textDecoration = "none";
})
