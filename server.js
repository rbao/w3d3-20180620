const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('public'));

app.use(bodyParser.urlencoded({
  extended: true
}))

const products = {
  1: {
    id: 1,
    name: 'Macbook',
    price: '$2400'
  },
  2: {
    id: 2,
    name: 'iPhone',
    price: '$800'
  },
  3: {
    id: 3,
    name: 'iPad',
    price: '$900'
  }
}

var nextProductId = 4

app.get('/products', (req, res) => {
  // 1. Converts products to a JSON string
  // 2. Set the content-type of the response
  // 3. Sends the response
  res.json(products);
})

app.post('/products', (req, res) => {
  const newProduct = {
    id: nextProductId,
    name: req.body.name,
    price: req.body.price
  }
  products[nextProductId] = newProduct;
  nextProductId += 1;
  // res.redirect('/');
  res.status(201).json(newProduct)
})

var port = 7000
app.listen(port, () => {
  console.log(`listening on ${port}`)
})