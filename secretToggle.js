function toggleSecret(domElement){
	if (domElement.display === "none")
	{
		domElement.style.display = "block";
	}
	else
	{
		domElement.style.display = "none";
	}
}


export {toggleSecret}


