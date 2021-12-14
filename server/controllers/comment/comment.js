module.exports = {
  post: (req, res) => {
    try {
      res.send('Comment Create Ok!');
    } catch (err) {
      return res.status(500).send('Error!');
    }
  },
  patch: (req, res) => {
    try {
      res.send('Comment Edit Ok!');
    } catch (err) {
      return res.status(500).send('Error!');
    }
  },
  delete: (req, res) => {
    try {
      res.send('Comment Delete Ok!');
    } catch (err) {
      return res.status(500).send('Error!');
    }
  }
};