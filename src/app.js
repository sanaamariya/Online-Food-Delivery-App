const express = require('express');
const app = express();
app.use(express.json());

const products = [
  { id: 1, name: 'Wireless Headphones', price: 2500 },
  { id: 2, name: 'Running Shoes', price: 3200 },
  { id: 3, name: 'Laptop Backpack', price: 1400 },
];

let orders = [];

app.get('/products', (req, res) => res.json(products));

app.post('/order', (req, res) => {
  const { productId, quantity } = req.body;
  const product = products.find(p => p.id === productId);
  if (!product) return res.status(404).json({ error: 'Product not found' });
  const order = {
    orderId: orders.length + 1,
    product: product.name,
    quantity,
    total: product.price * quantity,
  };
  orders.push(order);
  res.status(201).json(order);
});

app.get('/orders', (req, res) => res.json(orders));

module.exports = app;