module.exports = {
  get: (req, res) => {
    try {
      res.send('Mycomment Ok!');
    } catch (err) {
      return res.status(500).json({ message: 'Server Error!' });
    }
  }
};