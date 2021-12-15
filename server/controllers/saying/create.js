module.exports = {
  post: (req, res) => {
    try {
      res.send('Create Saying Ok!');
    } catch (err) {
      return res.status(500).json({ message: 'Server Error!' });
    }
  }
};