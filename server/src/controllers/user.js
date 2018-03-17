import users from '../models/user';

class userController {
  static userSignIn(req, res) {
    users.push(req.body);
    return res.json({
      message: 'User sucessfully sign-in!',
      user: req.body,
    });
  }

  static userSignUp(req, res) {
    users.push(req.body);
    return res.json({
      message: 'User sucessfully sign-up!',
      user: req.body,
    });
  }
}

export default userController;
