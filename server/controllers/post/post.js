module.exports = {
  post: (req, res) => {
    try {
      res.send('Post Create Ok!');
    } catch (err) {
      return res.status(500).send('Error!');
    }
  },
  patch: (req, res) => {
    try {
      res.send('Post Edit Ok!');
    } catch (err) {
      return res.status(500).send('Error!');
    }
  },
  delete: (req, res) => {
    try {
      res.send('Post Delete Ok!');
    } catch (err) {
      return res.status(500).send('Error!');
    }
  }
};