// Creating an array and adding 4 grocery items
const groceryItems = ['mince', 'tomato', 'onion', 'pasta']
const list = document.getElementById('itemList')


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
        listItem.innerHTML = `${groceryItems[i]} <span onClick="deleteItem()" class="close">\u00D7</span> `
        list.appendChild(listItem)
    }
}
displayList(groceryItems)

function deleteItem () {
    console.log(groceryItems)
    console.log("hello")
}

// // Function to change the styling of items that have been bought already
// function boughtItems () {
//     const firstItem = document.querySelector('ul > li:nth-child(1)')
//     firstItem.style.color = "red"

//     const secondItem = document.querySelector('ul > li:nth-child(2')
//     secondItem.style.color= "red"
// }

// Calling the styling function

// boughtItems()
