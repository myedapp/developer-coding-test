const {
  request,
  expect,
  getApiToken,
} = require('./common');

// test api list student
describe('GET /api/v1/admin/students', () => {
  it('should return student list', async () => {
    const token = await getApiToken('59b39bcf538ff606c04d12db');
    await request
      .get('/api/v1/admin/students')
      .set('Authorization', `bearer ${token}`)
      .expect('Content-Type', /json/)
      .expect(200)
      .expect((resp) => {
        const result = JSON.parse(resp.text);
        expect(result[0]).to.have.property('id');
      });
  });
});

// test api get student quest_paths
describe('GET /api/v1/admin/students/{studentId}', () => {
  it('should return student quest_paths', async () => {
    const token = await getApiToken('59b39bcf538ff606c04d12db');
    await request
      .get('/api/v1/admin/students/1')
      .set('Authorization', `bearer ${token}`)
      .expect('Content-Type', /json/)
      .expect(200)
      .expect((resp) => {
        const result = JSON.parse(resp.text);
        expect(result).to.have.property('user_id');
      });
  });
});
