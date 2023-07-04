// Remove the <main> element with id 'main'
const mainElement = document.querySelector('main');
mainElement.remove();

// Create a new <h1> element with id 'victory'
const newHeader = document.createElement('h1');
newHeader.id = 'victory';

// Set the text content of the new <h1> element
newHeader.textContent = "YOUR-NAME is the champion";

// Append the new <h1> element to the body or any desired parent element
document.body.appendChild(newHeader);

   