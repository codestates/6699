module.exports = {
  get: (req, res) => {
    try {
      res.send('Saying Category Ok!');
    } catch (err) {
      return res.status(500).json({ message: 'Server Error!' });
    }
  }
};