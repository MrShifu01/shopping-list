
const showMorebutton = document.getElementById('showMoreButton')
const information = document.getElementById('info')

showMorebutton.addEventListener('click', function (event) {
    information.textContent += "some more information"
    if (event.shiftKey) {
        console.log("The shift key was pressed")
    } else {
        console.log("The shift key was not held")
    }
})