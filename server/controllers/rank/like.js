module.exports = {
  get: (req, res) => {
    try {
      res.send('Rank of Like!');
    } catch (err) {
      return res.status(500).send('Error!');
    }
  }
};