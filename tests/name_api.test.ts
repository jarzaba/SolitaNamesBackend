import supertest from 'supertest';
import app from '../app';

const api = supertest(app);

describe('The list of names:', () => {
  // eslint-disable-next-line jest/expect-expect
  test('are returned as json', async () => {
    await api
      .get('/api/names')
      .expect(200)
      .expect('Content-Type', /application\/json/);
  });
  test('has 20 items', async () => {
    const response = await api.get('/api/names');
    expect(response.body).toHaveLength(20);
  });
});
describe('When one item is selected from the list:', () => {
  // eslint-disable-next-line jest/expect-expect
  test('non-existing name in the path will return a proper error', async () => {
    await api.get('/api/names/jaajo').expect(404);
  });
  test('proper name in the path will return valid item', async () => {
    const response = await api.get('/api/names/ville').expect(200);
    expect(response.body.amount).toBe(24);
    expect(response.body.name).toContain('Ville');
  });
});
