import users from '../models/user';

const errorMessage = (res, message) => res.status(400).json({
  message,
  error: true,
});


class user {
  static signUp(req, res, next) {
    req.check('name', 'Name is required').notEmpty();
    req.check('email', 'Email is required').notEmpty();
    req.check('phone_number', 'Phone Number is required').notEmpty();
    req.check('email', 'Email is not valid').isEmail();
    req.check('password', 'Password is required').notEmpty();
    req.check('password2', 'Password confirmation is required').notEmpty();
    req
      .check('password', 'Minimum password length is 5 characters')
      .isLength({ min: 5 });
    req.check('password2', 'Password do not match').equals(req.body.password);
    const errors = req.validationErrors();
    if (errors) { return errorMessage(res, errors[0].msg); }

    next();
  }

  static signIn(req, res, next) {
    req.check('name', 'Name is required').notEmpty();
    req.check('password', 'Password is required').notEmpty();
    req
      .check('password', 'Minimum password length is 5 characters')
      .isLength({ min: 5 });
    const errors = req.validationErrors();
    if (errors) { return errorMessage(res, errors[0].msg); }

    next();
  }
}

export default user;
