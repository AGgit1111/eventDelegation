// Get the list and div where content will be displayed
const list = document.getElementById('myList');
const displayDiv = document.getElementById('displayContent');

// Add an event listener to the list for the click event
list.addEventListener('click', function (event) {
    // Check if the clicked event is a list item
    if (event.target && event.target.nodeName === "LI") {
        const content = event.target.textContent || event.target.innerText;

        displayDiv.textContent = content;
    }
});