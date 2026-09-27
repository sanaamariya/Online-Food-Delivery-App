const express = require('express');
const app = express();
app.use(express.json());
const menu = [
{ id: 1, name: 'Margherita Pizza', price: 250 },
{ id: 2, name: 'Chicken Biryani', price: 300 },
{ id: 3, name: 'Veg Burger', price: 120 },
];
let orders = [];
app.get('/menu', (req, res) => res.json(menu));
app.post('/order', (req, res) => {

const { itemId, quantity } = req.body;
const item = menu.find(m => m.id === itemId);
if (!item) return res.status(404).json({ error: 'Item not found' });
const order = { orderId: orders.length + 1, item: item.name, quantity, total:
item.price * quantity };
orders.push(order);
res.status(201).json(order);
});
app.get('/orders', (req, res) => res.json(orders));
module.exports = app;