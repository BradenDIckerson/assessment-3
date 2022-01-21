console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	
		alert("Your form has been submitted!");

	// console.log('form submit');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

	
let image = document.querySelector("img#RubberDucky")

image.addEventListener("mouseover",  () => {
	alert("Nice Shoes!");
});


