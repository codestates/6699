module.exports = {
  get: (req, res) => {
    try {
      res.send('Post Like Ok!');
    } catch (err) {
      return res.status(500).send('Error!');
    }
  },
  post: (req, res) => {
    try {
      res.send('Post Like On!');
    } catch (err) {
      return res.status(500).send('Error!');
    }
  },
  delete: (req, res) => {
    try {
      res.send('Post Like off!');
    } catch (err) {
      return res.status(500).send('Error!');
    }
  }
};