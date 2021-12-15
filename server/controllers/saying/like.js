module.exports = {
  get: (req, res) => {
    try {
      res.send('Category Like Ok!');
    } catch (err) {
      return res.status(500).json({ message: 'Server Error!' });
    }
  },
  post: (req, res) => {
    try {
      res.send('Category Like On!');
    } catch (err) {
      return res.status(500).json({ message: 'Server Error!' });
    }
  },
  delete: (req, res) => {
    try {
      res.send('Category Like off!');
    } catch (err) {
      return res.status(500).json({ message: 'Server Error!' });
    }
  }
};