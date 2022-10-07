/** Exercise 03 - Form **/

// Add your code here
document.querySelector('form').addEventListener('submit', (event) => {
	event.preventDefault();
	let name = document.getElementById('username').value;
	let email = document.getElementById('email').value;
	let msg = document.getElementById('msg').value || 'No feedback was submitted';
	let checkbox = document.getElementById('checkbox').checked
		? 'Yes, I would like to join the newsletter'
		: 'No, thank you';

	console.log('===== Form Submission =====');
	console.log(`Name: ${name}`);
	console.log(`Name: ${email}`);
	console.log(`Name: ${msg}`);
	console.log(`Name: ${checkbox}`);
});
