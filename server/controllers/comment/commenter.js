const { userAuth } = require('../../middlewares/authorized/userAuth')
const { users, articles, comments } = require('../../models');

module.exports = {
  get: async (req, res) => {
    try {

      const { userId } = req.params

      console.log("userId:", userId)
      


      res.status(200).json({ message: '이것만 되면 정말 끝!!!' });      
    } catch (err) {
      return res.status(500).json({ message: 'Server Error!' });
    }
  }
};