import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/app';

const should = chai.should();

chai.use(chaiHttp);
describe('Business', () => {
  it('it should GET all the businesses', (done) => {
    chai.request(app)
      .get('/business')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});
