import businesses from '../models/business';

class business {
  static getAllBusiness(req, res, next) {
    if (businesses === '') {
      return res.json({ message: 'Business not available' });
    }
    return res.json({ business: businesses, message: 'Get All Request Successful' });
  }

  static postBusiness(req, res) {
    businesses.push(req.body);
    return res.json({
      message: 'Business sucessfully registered!',
      business: req.body,
    });
  }

  static getBusiness(req, res) {
    for (let i = 0; i < businesses.length; i += 1) {
      if (businesses[i].id === parseInt(req.params.id, 10)) {
        return res.status(200).json({
          business: businesses[i],
          message: 'Business details',
        });
      }
    }
    return res.status(404).json({
      message: 'Not Found',
    });
  }

  static updateBusiness(req, res, next) {
    for (let i = 0; i < businesses.length; i += 1) {
      if (businesses[i].id === parseInt(req.params.id, 10)) {
        businesses[i].name = req.body.name.toLowerCase();
        businesses[i].services = req.body.services.toLowerCase();
        businesses[i].phone_number = req.body.phone_number.toLowerCase();
        businesses[i].email = req.body.email.toLowerCase();
        businesses[i].address = req.body.address.toLowerCase();
        businesses[i].category = req.body.category.toLowerCase();
        businesses[i].location = req.body.location.toLowerCase();
        businesses[i].imageUpload = req.body.imageUpload.toLowerCase();
        return res.json({
          message: 'Business successfully updated',
          business: businesses[i],
        });
      }
    }
    return res.status(404).json({
      message: 'Not Found',
    });
  }

  static deleteBusiness(req, res, next) {
    for (let i = 0; i < businesses.length; i += 1) {
      if (businesses[i].id === parseInt(req.params.id, 10)) {
        businesses.splice(i, 1);
        return res.json({
          message: 'Business successfully Deleted',
        });
      }
    }
    return res.status(404).json({
      message: 'Not Found',
    });
  }

  static getReviews(req, res, next) {
    for (let i = 0; i < businesses.length; i += 1) {
      if (businesses[i].id === parseInt(req.params.id, 10)) {
        return res.json({
          reviews: businesses[i].reviews,
          message: 'Review Success',
        });
      }
    }
    return res.status(404).json({
      message: 'Business not found',
    });
  }

  static postReviews(req, res) {
    for (let i = 0; i < businesses.length; i += 1) {
      if (businesses[i].id === parseInt(req.params.id, 10)) {
        businesses[i].reviews.push(req.body);
        return res.json({
          reviews: businesses[i].reviews,
          message: 'Add review successful',
        });
      }
    }
    return res.status(404).json({
      message: 'Business not found',
    });
  }
}

export default business;
