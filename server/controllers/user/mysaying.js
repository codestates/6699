module.exports = {
  get: (req, res) => {
    try {
      res.send('Mysaying Ok!');
    } catch (err) {
      return res.status(500).send('Error!');
    }
  },
  delete: (req, res) => {
    try{
      const { sayingLikesId } = req.params;
      
      if( sayingLikesId === 1 ){
        res.send('Mysaying delete Ok!');
      }
    } catch (err) {
      return res.status(500).send('Error!');
    }
  }
};