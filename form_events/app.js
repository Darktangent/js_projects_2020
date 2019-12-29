const form = document.querySelector('#signup-form');
const creditCard = document.querySelector('#cc');
const terms = document.querySelector('#terms');
const veggie = document.querySelector('#veggie');

// form.addEventListener('submit', function(e) {
// 	console.log('cc', creditCard.value);
// 	console.log('terms', terms.checked);
// 	console.log('veggie', veggie.value);

// 	e.preventDefault();
// });
const formData = {};
for (let data of [creditCard, terms, veggie]) {
	data.addEventListener('input', ({ target }) => {
		const { name, type, value, checked } = target;

		console.log(name);
		formData[name] = type === 'checkbox' ? checked : value;
	});
}
// creditCard.addEventListener('input', function(e) {
// 	console.log(e);
// 	formData['cc'] = e.target.value;
// });
// veggie.addEventListener('input', function(e) {
// 	console.log(e);
// 	formData['veggie'] = e.target.value;
// });
// terms.addEventListener('input', function(e) {
// 	console.log(e);
// 	formData['terms'] = e.target.checked;
// });
