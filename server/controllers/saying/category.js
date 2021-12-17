const { sayings } = require('../../models');
const categoryList = ['건강', '학습', '경제', '인간관계', '사랑']

module.exports = {
  get: async (req, res) => {
    try {
      const { category } = req.query;
      // 특정 카테고리 명언 조회 (카테고리가 전달된 경우)
      if(category) {
        // 양식에 맞지 않은 카테고리가 전달된 경우, 다음을 응답한다
        if(categoryList.indexOf(category) === -1) return res.status(400).json({ message: 'wrong category' })
        // 전달받은 카테고리와 일치하는 모든 명언을 찾는다
        const filteredSaying = await sayings.findAll( { where: { category }});
        res.status(200).json({ filteredSaying });
      } 
      // 명언 전체 조회
      else {
        // 모든 명언을 찾는다
        const allSaying = await sayings.findAll();
        res.status(200).json({ allSaying });
      }
    } catch (err) {
      return res.status(500).json({ message: 'Server Error!' });
    }
  },
  post: async (req, res) => {
    try {
      const { category } = req.query;
      const { content, user_id } = req.body;
      // content, category, user_id 중 하나라도 전달되지 않았다면, 다음을 응답한다
      if(!category || !content || !user_id) return res.status(400).json({ message: 'insufficient parameters supplied' });
       // 양식에 맞지 않은 카테고리가 전달된 경우, 다음을 응답한다
      if(categoryList.indexOf(category) === -1) return res.status(400).json({ message: 'wrong category' })
      // 유저가 같은 명언(content, category 동일)을 작성했는지 확인한다
      const isRepeated = await sayings.findOne({ where: { content, category, user_id }});
      // 유저가 같은 명언을 작성한 경우, 다음을 응답한다
      if(isRepeated) return res.status(400).json({ message: 'saying is already posted!' });
      // 새로운 명언이 작성되었다면, sayings 테이블에 해당 명언을 저장한다
      await sayings.create({ content, category, user_id });
      res.status(201).json({ message: 'new saying is posted!' });
    } catch (err) {
      return res.status(500).json({ message: 'Server Error!' });
    }
  }
};