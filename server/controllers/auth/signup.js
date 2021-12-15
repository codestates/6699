const { users } = require('../../models');

module.exports = {
  post: (req, res) => {
    try {

      const { email, password, username } = req.body

      res.send('Signup Ok!');
    } catch (err) {
      return res.status(500).send('Error!');
    }
  }
};