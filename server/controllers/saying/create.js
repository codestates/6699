const { sayings } = require('../../models');

module.exports = {
  post: async (req, res) => {
    try {

      const { category } = req.params;
      const { content, user_id } = req.body;
       // category, content, user_id 중 하나라도 전달이 되지 않은 경우, 다음을 응답한다
      if(!category || !content || !user_id) return res.status(400).json({ message: 'insufficient parameters supplied' });
      // 유저가 중복된 정보를 입력했을 경우, 다음을 응답한다
      const isRepeated = await sayings.findOne({ where: { content: content, category: category, user_id: user_id } })
      if(isRepeated) return res.status(400).json({ message: 'content is already existed!' })
      else {
        sayings.create({ content, category, user_id });
        res.status(201).json({ message: 'new saying is created!' });
      }
    } catch (err) {
      console.log(err)
      return res.status(500).json({ message: 'Server Error!' });
    }
  }
};