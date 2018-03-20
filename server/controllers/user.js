import users from '../models/user';

class user {
  static SignUp(req, res) {
    const {
      id,
      name,
      password,
      password2,
      phoneNumber,
      email,
    } = req.body;
    const userBody = {
      id,
      name,
      password,
      password2,
      phoneNumber,
      email,
    };
    users.push(userBody);
    return res.status(200).json({
      message: 'Signup Successful',
      user: userBody,
    });
  }

  static SignIn(req, res) {
    for (let userCount = 0; userCount < users.length; userCount += 1) {
      if (users[userCount].name.toLowerCase() === req.body.name.toLowerCase() &&
            users[userCount].password.toLowerCase() === req.body.password.toLowerCase()) {
        return res.status(202).json({
          message: 'Login Successful',
        });
      }
      return res.status(401).json({
        message: 'Login Unsuccessful',
      });
    }
  }
}

export default user;
