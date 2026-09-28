const request = require('supertest');
const app = require('../src/app');

describe('Online Shopping API', () => {
  test('GET /products returns product list', async () => {
    const res = await request(app).get('/products');
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });

  test('POST /order creates an order', async () => {
    const res = await request(app).post('/order').send({ productId: 1, quantity: 2 });
    expect(res.statusCode).toBe(201);
    expect(res.body.total).toBe(5000);
  });

  test('POST /order with invalid product fails', async () => {
    const res = await request(app).post('/order').send({ productId: 999, quantity: 1 });
    expect(res.statusCode).toBe(404);
  });
});