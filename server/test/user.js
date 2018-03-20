import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';
import user from '../models/user';

describe('POST /api/v1/auth/signin Route Test', () => {
  it('it should not be able to sign in with empty password field', (done) => {
    const userTest = {
      name: 'Tobi',
      password: '',
    };
    chai.request(app)
      .post('/api/v1/auth/signin')
      .send(userTest)
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        done();
      });
  });
  it('it should not be able to sign in with empty user field', (done) => {
    const userTest = {
      name: '',
      password: '12345',
    };
    chai.request(app)
      .post('/api/v1/auth/signin')
      .send(userTest)
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        done();
      });
  });
  it('user cannot sign in with wrong username', (done) => {
    const userTest = {
      name: 'Cee',
      password: '12345',
    };
    chai.request(app)
      .post('/api/v1/auth/signin')
      .send(userTest)
      .end((err, res) => {
        res.should.have.status(401);
        res.body.should.be.a('object');
        done();
      });
  });
  it('user cannot sign in with wrong password', (done) => {
    const userTest = {
      name: 'CeeCee',
      password: '1234567',
    };
    chai.request(app)
      .post('/api/v1/auth/signin')
      .send(userTest)
      .end((err, res) => {
        res.should.have.status(401);
        res.body.should.be.a('object');
        done();
      });
  });
  it('user should be able to sign in with correct username and password fields', (done) => {
    const userTest = {
      name: 'CeeCee',
      password: '12345',
    };
    chai.request(app)
      .post('/api/v1/auth/signin')
      .send(userTest)
      .end((err, res) => {
        res.should.have.status(202);
        res.body.should.be.a('object');
        done();
      });
  });
});

describe('POST /api/v1/auth/signup Route Test', () => {
  it('it should not be able to sign up any field been empty', (done) => {
    const userTest = {
      id: 1,
      name: '',
      password: '12345',
      password2: '12345',
      phone_number: '09034222567',
      email: 'ceecee@gmail.com',
    };
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(userTest)
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        done();
      });
  });
  it('it should not be able to sign in with empty user field', (done) => {
    const userTest = {
      id: 1,
      name: '',
      password: '12345',
      password2: '12345',
      phone_number: '09034222567',
      email: 'ceecee@gmail.com',
    };
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(userTest)
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        done();
      });
  });
  it('user cannot sign in with wrong username', (done) => {
    const userTest = {
      id: 1,
      name: 'CeeCee',
      password: '12345',
      password2: '12345',
      phone_number: '09034222567',
      email: 'ceecee.com',
    };
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(userTest)
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        done();
      });
  });

  it('user should be able to sign in with correct username and password fields', (done) => {
    const userTest = {
      id: 3,
      name: 'Tobi',
      password: '12345',
      password2: '12345',
      phone_number: '09034222567',
      email: 'ceecee@gmail.com',
    };
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(userTest)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  });
});

