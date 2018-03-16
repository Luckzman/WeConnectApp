import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/app';
import business from '../src/models/business';

const should = chai.should();

chai.use(chaiHttp);
describe('GET /Business Route Test', () => {
  it('it should GET all the businesses', (done) => {
    chai.request(app)
      .get('/business')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.business.should.be.a('array');
        done();
      });
  });
});
describe('POST /Business Route Test', () => {
  it('it should not POST a business with empty field', (done) => {
    const businessTest = {
      id: 1,
      name: '',
      services: 'Wed Development',
      phone_number: '09034222567',
      email: '',
      address: '1, xyz street, Surulere, Lagos',
      category: 'Information Technology',
      location: 'Lagos',
      image: 'url',
    };
    chai.request(app)
      .post('/business')
      .send(businessTest)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('name' || 'services' || 'phone_number' || 'email' || 'address' || 'location' || 'image').not.eql('');
        done();
      });
  });
  it('it should POST business', (done) => {
    const businessTest = {
      id: 1,
      name: 'x-plug Nig. Ltd',
      services: 'Wed Development',
      phone_number: '09034222567',
      email: 'xplug@gmail.com',
      address: '1, xyz street, Surulere, Lagos',
      category: 'Information Technology',
      location: 'Lagos',
      image: 'url',
    };
    chai.request(app)
      .post('/business')
      .send(businessTest)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('message').eql('Business sucessfully registered!');
        res.body.business.should.have.property('name' && 'services' && 'phone_number' && 'email' && 'address' && 'category' && 'location');
        done();
      });
  });
});
describe('GET /Business/:id Route Test', () => {
  it('it should GET business detail', (done) => {
    const businessTest = {
      id: 1,
      name: 'x-plug Nig. Ltd',
      services: 'Wed Development',
      phone_number: '09034222567',
      email: 'xplug@gmail.com',
      address: '1, xyz street, Surulere, Lagos',
      category: 'Information Technology',
      location: 'Lagos',
      image: 'url',
    };
    const id = 1;
    chai.request(app)
      .get(`/business/${id}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.business.should.have.property('name' && 'services' && 'phone_number' && 'email' && 'address' && 'category' && 'location');
        res.body.business.should.have.property('id').equal(id);
        done();
      });
  });
});
describe('PUT /Business/:id Route Test', () => {
  it('it should PUT business detail', (done) => {
    const businessTest = {
      id: 1,
      name: 'x-plug Nig. Ltd',
      services: 'Wed Development',
      phone_number: '09034222567',
      email: 'xplug@gmail.com',
      address: '1, xyz street, Surulere, Lagos',
      category: 'Information Technology',
      location: 'Lagos',
      image: 'url',
    };
    const id = 1;
    chai.request(app)
      .put(`/business/${id}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.business.should.have.property('name' && 'services' && 'phone_number' && 'email' && 'address' && 'category' && 'location');
        res.body.business.should.have.property('id').equal(id);
        done();
      });
  });
});

