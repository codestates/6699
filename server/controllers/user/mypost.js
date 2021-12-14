module.exports = {
  get: (req, res) => {
    try {
      res.send('Mypost Ok!');
    } catch (err) {
      return res.status(500).send('Error!');
    }
  }
};