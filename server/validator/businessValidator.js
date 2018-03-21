import businesses from '../models/business';

const errorMessage = (res, message) => res.status(400).json({
  message,
});

const businessValidator = {

  createBusiness(req, res, next) {
    req.check('name', 'Business name is required').notEmpty();
    req.check('services', 'Services is required').notEmpty();
    req.check('phoneNumber', 'Phone number is required').notEmpty();
    req.check('email', 'Email is required').notEmpty();
    req.check('email', 'Email is not valid').isEmail();
    req.check('address', 'Address is required').notEmpty();
    req.check('category', 'Category is required').notEmpty();
    req.check('location', 'Location is required').notEmpty();
    const errors = req.validationErrors();
    if (errors) { return errorMessage(res, errors[0].msg); }

    next();
  },

  createReview(req, res, next) {
    req.check('name', 'Name is required').notEmpty();
    req.check('review', 'Review is required').notEmpty();
    const errors = req.validationErrors();
    if (errors) { return errorMessage(res, errors[0].msg); }

    next();
  },

  queryBusinessByLocation(req, res, next) {
    const { location } = req.query;
    const locationArray = [];
    if (location) {
      for (let i = 0; i < businesses.length; i += 1) {
        if (location.toLowerCase() === businesses[i].location.toLowerCase()) {
          locationArray.push(businesses[i]);
        }
      }
      if (locationArray.length === 0) {
        return res.status(404).json({
          message: 'Business not found',
        });
      }
      return res.status(200).json({
        Search_result: locationArray,
        message: 'Success',
      });
    }

    const errors = req.validationErrors();
    if (errors) { return errorMessage(res, errors[0].msg); }

    next();
  },

  queryBusinessByCategory(req, res, next) {
    const { category } = req.query;
    const categoryArray = [];
    if (category) {
      for (let i = 0; i < businesses.length; i += 1) {
        if (category.toLowerCase() === businesses[i].category.toLowerCase()) {
          categoryArray.push(businesses[i]);
        }
      }
      if (categoryArray.length > 0) {
        return res.status(200).json({
          Search_result: categoryArray,
        });
      }
      return res.status(404).json({
        message: 'Business not found',
      });
    }

    const errors = req.validationErrors();
    if (errors) { return errorMessage(res, errors[0].msg); }
    next();
  },
};

export default businessValidator;
