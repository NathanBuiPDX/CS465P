/** Exercise 02 - Reverse **/

// Add your code here
const reverse = document.querySelector('#reverse');
let output = document.createElement('div');
output.style.marginTop = '10px';
reverse.after(output);
reverse.addEventListener('click', (event) => {
	event.preventDefault();
	let inputValue = document.getElementById('input').value;
	let result = '';
	result = inputValue.split('');
	console.log(inputValue);
	if (result.length !== 8) {
		output.style.color = 'red';
		result = 'Error: Please input an 8-digit number';
	} else {
		result = result.reverse().join('');
		output.style.color = 'green';
		result = `${inputValue} --> ${result}`;
	}
	output.innerHTML = result;
});
