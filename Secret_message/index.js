document.querySelector('form').addEventListener('submit', e => {
	document.querySelector('#message-form').classList.add('hide');
	document.querySelector('#link-form').classList.remove('hide');
	e.preventDefault();
	const input = document.querySelector('#message-input');
	const encrypted = btoa(input.value);
	// console.log(input.value);
	const encInput = document.querySelector('#link-input');
	encInput.value = `${window.location}#${encrypted}`;
	encInput.select();
});
console.log('Test');
const { hash } = window.location;
const msg = atob(hash.replace('#', ''));
if (msg) {
	document.querySelector('#message-form').classList.add('hide');
	document.querySelector('#message-show').classList.remove('hide');
	document.querySelector('#message-show h1').innerHTML = msg;
}
