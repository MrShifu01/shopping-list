// Creating an array and adding 4 grocery items
let groceryItems = ['mince', 'tomato', 'onion', 'pasta']
const list = document.getElementById('itemList')

// Function for updating the list with new values
function updateList () {
    const input = document.getElementById('input')
    if (!input.value) {
        alert("Please enter an item!")
    } else {
        groceryItems.push(input.value)
        input.value = ""
    }
    displayList(groceryItems)
}


// A function that loops throught the array and adds each element to the grocery list in the UI
function displayList (groceryItems) {
    list.textContent = ''
    for (let i = 0; i < groceryItems.length; i++) {
        const listItem= document.createElement('li')
        listItem.innerHTML = `${groceryItems[i]} <span onClick="deleteItem('item${i}')" class="close">\u00D7</span>`
        listItem.id = `item${i}`
        list.appendChild(listItem)
    }
}
displayList(groceryItems)

// Function to delete an item from the array and from the list
function deleteItem(itemId) {
    const deleteElement = document.getElementById(itemId)
    const itemToRemove = deleteElement.textContent.slice(0, -2).trim()
    groceryItems = groceryItems.filter(item => item !== itemToRemove)
    deleteElement.style.display = "none"
    displayList(groceryItems)
}

// Assigning itemList in order to create the toggle event
const itemList = document.getElementById('itemList')

// Event listener that can toggle whether an item is checked or not
itemList.addEventListener('click', function (event) {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("checked")
    }
})

// Assigning a value that can be used to make use of ENTER
const inputEnter = document.getElementById('input')

// Event listener that notices an enter and calls the click() function
inputEnter.addEventListener('keyup', function (event) {
    
    if (event.keyCode === 13) {
        const addbutton = document.getElementById('addBtn')
        addbutton.click()
    }
} )



// // Function to change the styling of items that have been bought already
// function boughtItems () {
//     const firstItem = document.querySelector('ul > li:nth-child(1)')
//     firstItem.style.color = "red"

//     const secondItem = document.querySelector('ul > li:nth-child(2')
//     secondItem.style.color= "red"
// }

// Calling the styling function

// boughtItems()
