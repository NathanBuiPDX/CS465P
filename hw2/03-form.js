/** Exercise 03 - Form **/

// Add your code here
let form = document.querySelector('form');
form.addEventListener('submit', (event) => {
	event.preventDefault();
	console.log("FORM ELEMENT: ", form.elements);
	let name = form.elements.username.value;
	let email = form.elements.email.value;
	let msg = form.elements.msg.value || 'No feedback was submitted';
	let checkbox = form.elements.checkbox.checked
		? 'Yes, I would like to join the newsletter'
		: 'No, thank you';

	console.log('===== Form Submission =====');
	console.log(`Name: ${name}`);
	console.log(`Email: ${email}`);
	console.log(`Message: ${msg}`);
	console.log(`Newsletter: ${checkbox}`);
});
