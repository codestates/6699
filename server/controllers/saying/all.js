module.exports = {
  get: (req, res) => {
    try {

      console.log(req)
      
      res.send('Category All Ok!');
    } catch (err) {
      return res.status(500).json({ message: 'Server Error!' });
    }
  }
};