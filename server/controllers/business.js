import businesses from '../models/business';

const business = {
  createBusiness(req, res) {
    const {
      id,
      name,
      services,
      phoneNumber,
      email,
      address,
      category,
      location,
      image,
    } = req.body;

    const businessBody = {
      id,
      name,
      services,
      phoneNumber,
      email,
      address,
      category,
      location,
      image,
    };

    businesses.push(businessBody);
    return res.json({
      message: 'Business sucessfully registered!',
      business: businessBody,
    });
  },

  getAllBusiness(req, res) {
    if (businesses === '') {
      return res.json({ message: 'Business not available' });
    }
    return res.json({ business: businesses, message: 'Get All Request Successful' });
  },

  getBusiness(req, res) {
    for (let i = 0; i < businesses.length; i += 1) {
      if (businesses[i].id === parseInt(req.params.id, 10)) {
        return res.status(200).json({
          business: businesses[i],
          message: 'Business details',
        });
      }
    }

    return res.status(404).json({
      message: 'Not Founds',
    });
  },

  updateBusiness(req, res, next) {
    for (let i = 0; i < businesses.length; i += 1) {
      if (businesses[i].id === parseInt(req.params.id, 10)) {
        businesses[i].name = req.body.name;
        businesses[i].services = req.body.services;
        businesses[i].phoneNumber = req.body.phoneNumber;
        businesses[i].email = req.body.email;
        businesses[i].address = req.body.address;
        businesses[i].category = req.body.category;
        businesses[i].location = req.body.location;
        businesses[i].imageUpload = req.body.imageUpload;
        return res.json({
          message: 'Business successfully updated',
          business: businesses[i],
        });
      }
    }
    return res.status(404).json({
      message: 'Not Found',
    });
  },

  deleteBusiness(req, res, next) {
    for (let i = 0; i < businesses.length; i += 1) {
      if (businesses[i].id === parseInt(req.params.id, 10)) {
        businesses.splice(i, 1);
        return res.json({
          message: 'Business successfully Deleted',
        });
      }
    }
    return res.status(404).json({
      message: 'Not Foundsss',
    });
  },

  getReviews(req, res, next) {
    for (let i = 0; i < businesses.length; i += 1) {
      if (businesses[i].id === parseInt(req.params.id, 10)) {
        return res.json({
          reviews: businesses[i].reviews,
          message: 'Success',
        });
      }
    }
    return res.status(404).json({
      message: 'Business not found',
    });
  },

  createReviews(req, res) {
    for (let i = 0; i < businesses.length; i += 1) {
      if (businesses[i].id === parseInt(req.params.id, 10)) {
        businesses[i].reviews.push(req.body);
        return res.json({
          reviews: businesses[i].reviews,
          message: 'Reviews successfuly added',
        });
      }
    }
    return res.status(404).json({
      message: 'Business not found',
    });
  },
};

export default business;
