import businesses from '../models/business';

class business {
  static getAllBusiness(req, res, next) {
    if (businesses === '') {
      res.json({ message: 'Business not available' });
    }
    res.json({ business: businesses, message: 'Get All Request Successful' });
  }

  static postBusiness(req, res, next) {
    if (!req.body.name) {
      res.json({ message: 'Enter Business Name' });
    }
    if (!req.body.services) {
      res.json({ message: 'Enter Business Services' });
    }
    if (!req.body.phone_number) {
      res.json({ message: 'Enter Business Phone Number' });
    }
    if (!req.body.email) {
      res.json({ message: 'Enter Business Email' });
    }
    if (!req.body.address) {
      res.json({ message: 'Enter Business Address' });
    }
    if (!req.body.category) {
      res.json({ message: 'Choose Business Category' });
    }
    if (!req.body.location) {
      res.json({ message: 'Choose A Business Location' });
    }
    businesses.push(req.body);
    res.json({
      message: 'Business sucessfully registered',
      business: req.body,
    });
  }

  static getBusiness(req, res, next) {
    for (let i = 0; i < businesses.length; i += 1) {
      if (businesses[i].id === parseInt(req.params.id, 10)) {
        res.json({
          business: businesses[i],
          message: 'Business successfully',
        });
      }
    }
    res.status(404).json({
      message: 'Not Found',
    });
  }

  static updateBusiness(req, res, next) {
    for (let i = 0; i < businesses.length; i += 1) {
      if (businesses[i].id === parseInt(req.params.id, 10)) {
        businesses[i].name = req.body.name;
        businesses[i].services = req.body.services;
        businesses[i].phone_number = req.body.phone_number;
        businesses[i].email = req.body.email;
        businesses[i].address = req.body.address;
        businesses[i].category = req.body.category;
        businesses[i].location = req.body.location;
        businesses[i].imageUpload = req.body.imageUpload;
        res.json({
          message: 'Business successfully updated',
        });
      }
    }
    res.status(404).json({
      message: 'Not Found',
    });
  }

  static deleteBusiness(req, res, next) {
    for (let i = 0; i < businesses.length; i += 1) {
      if (businesses[i].id === parseInt(req.params.id, 10)) {
        businesses.splice(i, 1);
        res.json({
          message: 'Business successfully Deleted',
        });
      }
    }
    res.status(404).json({
      message: 'Not Found',
    });
  }
}

export default business;
