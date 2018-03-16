import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/app';
import business from '../src/models/business';

const should = chai.should();

chai.use(chaiHttp);
describe('Business Route Test', () => {
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
describe('Business Route Test', () => {
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
        res.body.business.should.have.property('name');
        res.body.business.should.have.property('services');
        res.body.business.should.have.property('phone_number');
        res.body.business.should.have.property('email');
        res.body.business.should.have.property('address');
        res.body.business.should.have.property('category');
        res.body.business.should.have.property('location');
        res.body.business.should.have.property('image');
        done();
      });
  });
});

