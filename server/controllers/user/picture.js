module.exports = {
  post: (req, res) => {
    try {
      res.send('Picture Ok!');
    } catch (err) {
      return res.status(500).send('Error!');
    }
  }
};