module.exports = {
  get: (req, res) => {
    try {
      res.send('Auth Ok!');
    } catch (err) {
      return res.status(500).send('Error!');
    }
  }
};