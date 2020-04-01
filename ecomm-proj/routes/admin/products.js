const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const productsRepo = require('../../repositories/products');
const { requireTitle, requirePrice } = require('./validators');
const productsNewTemplate = require('../../views/admin/products/new');
// show products to admin
router.get('/admin/products', (req, res) => {});

// brand new prod

router.get('/admin/products/new', (req, res) => {
	res.send(productsNewTemplate({}));
});

// create prod

router.post('/admin/products/new', [requirePrice, requireTitle], (req, res) => {
	const errors = validationResult(req);
	console.log(errors);

	res.send('submitted');
});

module.exports = router;
