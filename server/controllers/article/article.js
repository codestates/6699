module.exports = {
  post: (req, res) => {
    try {
      res.send('Article Create Ok!');
    } catch (err) {
      return res.status(500).json({ message: 'Server Error!' });
    }
  },
  get: (req, res) => {
    try {
      res.send('Article Select Ok!');
    } catch (err) {
      return res.status(500).json({ message: 'Server Error!' });
    }
  },
  patch: (req, res) => {
    try {
      res.send('Article Edit Ok!');
    } catch (err) {
      return res.status(500).json({ message: 'Server Error!' });
    }
  },
  delete: (req, res) => {
    try {
      res.send('Article Delete Ok!');
    } catch (err) {
      return res.status(500).json({ message: 'Server Error!' });
    }
  }
};