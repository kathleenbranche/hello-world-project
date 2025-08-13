const request = require('supertest');
const app = require('./http-server');

describe('Hello World Server', () => {
  test('GET / returns Hello World response', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello World');
  });
});