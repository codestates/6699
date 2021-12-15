module.exports = {
  get: (req, res) => {
    try {
      res.send('MyPage Ok!');
    } catch (err) {
      return res.status(500).json({ message: 'Server Error!' });
    }
  },
  patch: (req, res) => {
    try {
      res.send('MyPage Edit Ok!');
    } catch (err) {
      return res.status(500).json({ message: 'Server Error!' });
    }
  },
  delete: (req, res) => {
    try {
      res.send('MyPage delete Ok!');
    } catch (err) {
      return res.status(500).json({ message: 'Server Error!' });
    }
  }
};