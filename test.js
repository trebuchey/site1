
const { addition } = require("./addition.js");



const sum = addition(1,3);
console.log(sum);
//const diff = subtraction(1,3);
//console.log(diff);

console.log("heya");


<html>

  <head>
    <title>Secret Messages</title>
  </head>
  <body>
    <button id="secret-button"> Press me... if you dare </button>
    <p id="secret-p" style="display: none"> Modules are fancy! </p>
    <script src="./secret-messages.js"> </script>
  </body>
</html>

<script>
	import {toggleSecret} from "./secretToggle.js"
	const buttonElement = document.getElementById('secret-button');
	const imgElement = document.getElementById('secret-p');
	buttonElement.addEventListener("click", () => {
		toggleSecret(imgElement)
	});
	
</script>

















