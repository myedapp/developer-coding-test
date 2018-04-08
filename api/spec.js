const request = require('supertest')
const app = require('./server')

describe('server functions', () => {

  it('GET /users responds with json', (done) => {
    request(app)
      .get('/users')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  it('GET /quest_pathways responds with json', (done) => {
    request(app)
      .get('/quest_pathways')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done)
  })
  
  it('GET for wrong file name responds with 404', (done) => {
    request(app)
      .get('/wrong')
      .set('Accept', 'application/json')
      .expect(404, done)
  })

})