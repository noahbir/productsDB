const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

const Product = require('./models/product');

mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/farmStand')
	.then(() => {
		console.log("Mongo Connection open")
	})
	.catch(error => {
		console.log("Mongo Connection Error")
		console.log(error)
	})

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/products', async (req, res) => {
    const products = await Product.find({})
    res.render('index', { products });
})

app.listen(3000, () => {
    console.log("App is listening on port 3000")
})