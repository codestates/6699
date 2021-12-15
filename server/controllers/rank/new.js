module.exports = {
  get: (req, res) => {
    try {
      res.send('Rank of New!');
    } catch (err) {
      return res.status(500).json({ message: 'Server Error!' });
    }
  }
};