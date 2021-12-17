module.exports = {
  get: (req, res) => {
    try {
      res.send('Article Like Ok!');
    } catch (err) {
      return res.status(500).json({ message: 'Server Error!' });
    }
  },
  post: (req, res) => {
    try {
      res.send('Article Like On!');
    } catch (err) {
      return res.status(500).json({ message: 'Server Error!' });
    }
  },
  delete: (req, res) => {
    try {
      res.send('Article Like off!');
    } catch (err) {
      return res.status(500).json({ message: 'Server Error!' });
    }
  }
};