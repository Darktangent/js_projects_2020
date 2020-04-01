const express = require('express');
// const usersRepo = require('./repositories/users');
const authRouter = require('./routes/admin/auth');
const productsRouter = require('./routes/admin/products');
const cookieSession = require('cookie-session');
const app = express();
app.use(express.static('public'));
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
	cookieSession({
		keys: ['skjf10kh'] //encryption key
	})
);
app.use(authRouter);
app.use(productsRouter);

app.listen(3000, () => {
	console.log('listening');
});

// const bodyParser = (req, res, next) => {
// 	if (req.method === 'POST') {
// 		req.on('data', data => {
// 			const parsedData = data.toString('utf8').split('&');
// 			const formData = {};
// 			for (data of parsedData) {
// 				const [key, value] = data.split('=');
// 				formData[key] = value;
// 			}
// 			console.log(formData);
// 			req.body = formData;
// 			next();
// 		});
// 	} else {
// 		next();
// 	}
// };
