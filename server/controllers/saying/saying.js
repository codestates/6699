const { sayings } = require('../../models');

module.exports = {
  get: async (req, res) => {
    try {
      const { sayingId } = req.params;
       // 명언 id가 전달이 되지 않은 경우, 다음을 응답한다
      if(!sayingId) return res.status(400).json({ message: 'insufficient parameters supplied' });
      // 요청된 명언 id와 일치하는 명언을 찾는다
      const filteredSaying = await sayings.findOne({ where: { id: sayingId } });
      // 만약 요청된 명언 id와 일치하는 명언이 없다면, 다음을 응답한다
      if(!filteredSaying) return res.status(400).json({ message: 'no matched saying' });
      // 만약 요청된 명언 id와 일치하는 명언이 있다면, 해당 명언을 전달한다
      else return res.status(200).json({ filteredSaying });
    } catch (err) {
      return res.status(500).json({ message: 'Server Error!' });
    }
  }
};