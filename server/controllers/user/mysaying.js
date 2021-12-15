module.exports = {
  get: (req, res) => {
    try {
      res.send('Mysaying Ok!');
    } catch (err) {
      return res.status(500).json({ message: 'Server Error!' });
    }
  },
  delete: (req, res) => {
    try{
      res.send('Mysaying delete Ok!');
    } catch (err) {
      return res.status(500).json({ message: 'Server Error!' });
    }
  }
};