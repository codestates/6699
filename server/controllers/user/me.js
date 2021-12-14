module.exports = {
  get: (req, res) => {
    try {
      res.send('MyPage Ok!');
    } catch (err) {
      return res.status(500).send('Error!');
    }
  },
  patch: (req, res) => {
    try {
      res.send('MyPage Patch Ok!');
    } catch (err) {
      return res.status(500).send('Error!');
    }
  },
  delete: (req, res) => {
    try {
      res.send('MyPage delete Ok!');
    } catch (err) {
      return res.status(500).send('Error!');
    }
  }
};