// Get the list and div where content will be displayed
const list = document.getElementById('myList');
const displayDiv = document.getElementById('displayContent');

// Add an event listener to the list for the click event
list.addEventListener('click', function (event) {
    // Check if the clicked event is a list item
    // 'event.target' refers to the element that was clicked.
    // 'nodeName' property is used to check if the clicked element is a <li> element.
    if (event.target && event.target.nodeName === "LI") {
        // The '||' is the OR operator used to return the first operand if truthy and if not, it will return the second operand.
        const content = event.target.textContent || event.target.innerText;

        displayDiv.textContent = content;
    }
});