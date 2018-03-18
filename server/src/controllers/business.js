import businesses from '../models/business';
// import users from '../models/user';

class business {
  // static SignUp(req, res) {
  //   // const newUser = req.body;
  //   // if (newUser) {
  //   users.push(req.body);
  //   return res.status(200).json({
  //     message: 'Signup Successful',
  //     user: req.body,
  //     // error: false,
  //   });
  //   // }
  //   // return res.status(400).json({
  //   //   message: 'Signup Unsuccessful',
  //   //   // error: true,
  //   // });
  // }

  // static SignIn(req, res) {
  //   for (let userCount = 0; userCount < users.length; userCount += 1) {
  //     if (users[userCount].name.toLowerCase() === req.body.name.toLowerCase() &&
  //       users[userCount].password.toLowerCase() === req.body.password.toLowerCase()) {
  //       return res.status(202).json({
  //         message: 'Login Successful',
  //         error: false,
  //       });
  //     }
  //     return res.status(401).json({
  //       message: 'Login Unsuccessful',
  //       error: true,
  //     });
  //   }
  // }

  static postBusiness(req, res) {
    businesses.push(req.body);
    return res.json({
      message: 'Business sucessfully registered!',
      business: req.body,
    });
  }
  static getAllBusiness(req, res, next) {
    if (businesses === '') {
      return res.json({ message: 'Business not available' });
    }
    return res.json({ business: businesses, message: 'Get All Request Successful' });
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
      message: 'Not Founds',
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
      message: 'Not Foundsss',
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
