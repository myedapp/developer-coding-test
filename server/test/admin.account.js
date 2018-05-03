const {
  request,
  expect,
  getApiToken,
} = require('./common');
const { createToken: createPasswordResetToken } = require('../modules/common/helpers');

// test api login
describe('POST /api/v1/admin/account/sessions', () => {
  it('should return token when login success', async () => {
    await request
      .post('/api/v1/admin/account/sessions')
      .send({
        loginId: 'admin@test.com',
        password: '123123',
      })
      .expect('Content-Type', /json/)
      .expect(200)
      .expect((resp) => {
        const result = JSON.parse(resp.text);
        expect(result).to.have.property('token');
        expect(result).to.have.property('user');
      });
  });
});

// test api get account information
describe('GET /api/v1/admin/account/profile', () => {
  it('should return profile data', async () => {
    const token = await getApiToken('59b39bcf538ff606c04d12db');
    await request
      .get('/api/v1/admin/account/profile')
      .set('Authorization', `bearer ${token}`)
      .expect('Content-Type', /json/)
      .expect(200)
      .expect((resp) => {
        const result = JSON.parse(resp.text);
        expect(result).to.have.property('email');
      });
  });
});

// test api update account information
describe('PUT /api/v1/admin/account/profile', () => {
  it('should return updated profile data', async () => {
    const token = await getApiToken('59b39bcf538ff606c04d12db');
    await request
      .put('/api/v1/admin/account/profile')
      .set('Authorization', `bearer ${token}`)
      .send({
        currentPassword: '123123',
        newPassword: '123456',
      })
      .expect('Content-Type', /json/)
      .expect(200)
      .expect((resp) => {
        const result = JSON.parse(resp.text);
        expect(result).to.have.property('email');
      });
  });
});


// test api reset password
describe('PUT /api/v1/admin/account/password', () => {
  it('should update user\'s password with new password', async () => {
    const token = createPasswordResetToken({ _id: '59b39bcf538ff606c04d12db' }, '10m');
    await request
      .put('/api/v1/admin/account/password')
      .send({
        token: token.value,
        password: '123123',
      })
      .expect('Content-Type', /json/)
      .expect(200)
      .expect((resp) => {
        const result = JSON.parse(resp.text);
        expect(result).to.have.property('message');
      });
  });
});
