import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/app';
import business from '../src/models/business';

const should = chai.should();

chai.use(chaiHttp);
describe('GET /Business Route Test', () => {
  it('it should GET all the businesses', (done) => {
    chai.request(app)
      .get('/api/v1/business')
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
      .post('/api/v1/business')
      .send(businessTest)
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
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
      .post('/api/v1/business')
      .send(businessTest)
      .end((err, res) => {
        // console.log(res.status);
        // console.log('----------');
        // console.log(res.body);
        // console.log('------------');
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
      .get(`/api/v1/business/${id}`)
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
      .put(`/api/v1/business/${id}`)
      .send({
        id: 1,
        name: 'x-plug Nig. Ltd',
        services: 'Wed Development',
        phone_number: '09034222567',
        email: 'xplug@gmail.com',
        address: '1, xyz street, Surulere, Lagos',
        category: 'Information Technology',
        location: 'Lokoja',
        image: 'url',
      })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('message').eql('Business successfully updated');
        res.body.business.should.have.property('id').equal(id);
        res.body.business.should.have.property('location').equal('Lokoja');
        done();
      });
  });
});

describe('DELETE /Business/:id Route Test', () => {
  it('it should DELETE business detail', (done) => {
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
      .delete(`/api/v1/business/${id}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('message').eql('Business successfully Deleted');
        done();
      });
  });
});

describe('GET /Business/:id/reviews Route Test', () => {
  it('it should GET reviews detail', (done) => {
    const businessTest = [{
      id: 1,
      name: 'x-plug Nig. Ltd',
      services: 'Wed Development',
      phone_number: '09034222567',
      email: 'xplug@gmail.com',
      address: '1, xyz street, Surulere, Lagos',
      category: 'Information Technology',
      location: 'Lagos',
      image: 'url',
      reviews: [{
        id: 1,
        name: 'Tobi Alabi',
        email: 'tobialabi@gmail.com',
        reviews: 'I love you company and services, just keep it up',
        country: 'USA',
      },
      {
        id: 2,
        name: 'Joseph Tutu',
        email: 'josephtutu@gmail.com',
        reviews: 'Best Services',
        country: 'Ghana',
      }],
    }];
    const id = 1;
    chai.request(app)
      .get(`/api/v1/business/${id}/reviews`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('message').eql('Success');
        done();
      });
  });
});

describe('POST /Business/:id/reviews Route Test', () => {
  it('it should POST reviews detail', (done) => {
    const reviewsTest = {
      id: 3,
      name: 'Tobi Alabi',
      email: 'tobialabi@gmail.com',
      review: 'I love you company and services, just keep it up',
      country: 'USA',
    };
    const id = 2;
    chai.request(app)
      .post(`/api/v1/business/${id}/reviews`)
      .send(reviewsTest)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('message').eql('Reviews successfuly added');
        done();
      });
  });
});

describe('GET /Business?location=lagos Route Test', () => {
  it('it should GET reviews detail', (done) => {
    const businessTest = [{
      id: 1,
      name: 'x-plug Nig. Ltd',
      services: 'Wed Development',
      phone_number: '09034222567',
      email: 'xplug@gmail.com',
      address: '1, xyz street, Surulere, Lagos',
      category: 'Information Technology',
      location: 'lagos',
      image: 'url',
      reviews: [{
        id: 1,
        name: 'Tobi Alabi',
        email: 'tobialabi@gmail.com',
        reviews: 'I love you company and services, just keep it up',
        country: 'USA',
      },
      {
        id: 2,
        name: 'Joseph Tutu',
        email: 'josephtutu@gmail.com',
        reviews: 'Best Services',
        country: 'Ghana',
      }],
    }];
    chai.request(app)
      .get('/api/v1/business?location=lagos')
      .end((err, res) => {
        // res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('message').eql('Success');
        done();
      });
  });
});

describe('GET /Business?category=information technology Route Test', () => {
  it('it should GET reviews detail', (done) => {
    const businessTest = [{
      id: 1,
      name: 'x-plug Nig. Ltd',
      services: 'Wed Development',
      phone_number: '09034222567',
      email: 'xplug@gmail.com',
      address: '1, xyz street, Surulere, Lagos',
      category: 'Information Technology',
      location: 'lagos',
      image: 'url',
      reviews: [{
        id: 1,
        name: 'Tobi Alabi',
        email: 'tobialabi@gmail.com',
        reviews: 'I love you company and services, just keep it up',
        country: 'USA',
      },
      {
        id: 2,
        name: 'Joseph Tutu',
        email: 'josephtutu@gmail.com',
        reviews: 'Best Services',
        country: 'Ghana',
      }],
    }];
    chai.request(app)
      .get('/api/v1/business?category=information technology')
      .end((err, res) => {
        // res.should.have.status(200);
        res.body.should.be.a('object');
        // res.body.should.have.property('message').eql('Success');
        done();
      });
  });
});

