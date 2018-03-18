import users from '../models/user';

class user {
  static SignUp(req, res) {
    // const newUser = req.body;
    // if (newUser) {
    users.push(req.body);
    return res.status(200).json({
      message: 'Signup Successful',
      user: req.body,
      // error: false,
    });
    // }
    // return res.status(400).json({
    //   message: 'Signup Unsuccessful',
    //   // error: true,
    // });
  }

  static SignIn(req, res) {
    for (let userCount = 0; userCount < users.length; userCount += 1) {
      if (users[userCount].name.toLowerCase() === req.body.name.toLowerCase() &&
            users[userCount].password.toLowerCase() === req.body.password.toLowerCase()) {
        return res.status(202).json({
          message: 'Login Successful',
          error: false,
        });
      }
      return res.status(401).json({
        message: 'Login Unsuccessful',
        error: true,
      });
    }
  }
}

export default user;
