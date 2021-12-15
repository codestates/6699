module.exports = {
  post: (req, res) => {
    try {
      res.send('Saying Create Ok!');
    } catch (err) {
      return res.status(500).send('Error!');
    }
  }
};