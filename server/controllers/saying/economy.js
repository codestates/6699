module.exports = {
  get: (req, res) => {
    try {
      res.send('Category Economy Ok!');
    } catch (err) {
      return res.status(500).send('Error!');
    }
  }
};