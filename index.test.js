const request = require('supertest');
const app = require('./index.js')

describe('GET / hello world', () => {
      it('should return a hello world', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toBe("Hello world!");

      });
    });