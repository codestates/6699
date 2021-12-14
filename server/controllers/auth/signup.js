module.exports = {
  post: (req, res) => {
    try {
      res.send('Signup Ok!');
    } catch (err) {
      return res.status(500).send('Error!');
    }
  }
};