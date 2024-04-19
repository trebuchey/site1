import {toggleSecret} from "./secretToggle.js"
const buttonElement = document.getElementById('secret-button');
const imgElement = document.getElementById('secret-p');
buttonElement.addEventListener("click", () => {
toggleSecret(imgElement)
});
	


