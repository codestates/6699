module.exports = {
  get: (req, res) => {
    try {
      res.send('Category Relationship Ok!');
    } catch (err) {
      return res.status(500).send('Error!');
    }
  }
};