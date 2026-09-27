const request = require('supertest');
const app = require('../src/app');
describe('Food Delivery API', () => {
 test('GET /menu returns menu items', async () => {
 const res = await request(app).get('/menu');
 expect(res.statusCode).toBe(200);
 expect(res.body.length).toBeGreaterThan(0);
 });
 test('POST /order creates an order', async () => {
 const res = await request(app).post('/order').send({ itemId: 1, quantity: 2 });
 expect(res.statusCode).toBe(201);
 expect(res.body.total).toBe(500);
 });
 test('POST /order with invalid item fails', async () => {
 const res = await request(app).post('/order').send({ itemId: 999, quantity: 1 }); expect(res.statusCode).toBe(404);
 });
});