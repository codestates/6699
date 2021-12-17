const { sayings } = require('../../models');
const { saying_likes } = require('../../models');

module.exports = {
  get: async (req, res) => {
    try {
      const { user_id } = req.body;
      // sayingId는 문자열
      const { sayingId } = req.params;
      // user_id, sayingId 중 하나라도 전달이 되지 않은 경우, 다음을 응답한다
      if(!user_id || !sayingId) return res.status(400).json({ message: 'insufficient parameters supplied' });
      // 유저가 해당 명언에 좋아요를 눌렀는지 확인
      const sayingLikeInfo = await saying_likes.findOne({ where: { user_id, saying_id: sayingId }});
      // 만약 유저가 해당 명언에 좋아요를 누르지 않았다면, 다음을 응답한다.
      if(!sayingLikeInfo) return res.status(200).json({ state: false, message: 'you did not like it before!' });
      // 만약 유저가 명언에 좋아요를 눌렀다면, 다음을 응답한다.
      else return res.status(200).json({ state: true, message: 'you liked it!' });
    } catch (err) {
      return res.status(500).json({ message: 'Server Error!' });
    }
  },
  post: async (req, res) => {
    try {
      const { user_id } = req.body;
      // sayingId는 문자열
      const { sayingId } = req.params;
      // user_id, sayingId 중 하나라도 전달이 되지 않은 경우, 다음을 응답한다
      if(!user_id || !sayingId) return res.status(400).json({ message: 'insufficient parameters supplied' });
      // 유저가 명언에 이미 좋아요를 눌렀는지 확인
      const sayingLikeInfo = await saying_likes.findOne({ where: { user_id, saying_id: sayingId }});
      // 만약 이미 좋아요를 눌렀다면, 다음을 응답한다
      if(sayingLikeInfo) return res.status(400).json({ message: 'you already liked it!' });
      // 만약 좋아요를 눌르지 않았다면, 해당 명언의 total_like를 +1하고
      // 유저가 해당 명언에 좋아요를 눌렀음을 saying_likes에 저장
      else {
        const sayingInfo = await sayings.findOne({ where: { id: Number(sayingId) } });
        let plusTotalLike = sayingInfo.total_like + 1;
        await sayingInfo.update({ total_like: plusTotalLike });
        await saying_likes.create({ user_id: user_id, saying_id: Number(sayingId) });

        return res.status(201).json({ message: 'like it!'});
      }
    } catch (err) {
      return res.status(500).json({ message: 'Server Error!' });
    }
  },
  delete: async (req, res) => {
    try {
      const { user_id } = req.body;
      // 주의! sayingId는 문자열
      const { sayingId } = req.params;
      // user_id, sayingId 중 하나라도 전달이 되지 않은 경우, 다음을 응답한다
      if(!user_id || !sayingId) return res.status(400).json({ message: 'insufficient parameters supplied' });
      // 유저가 명언에 이미 좋아요를 눌렀는지 확인
      const sayingLikeInfo = await saying_likes.findOne({ where: { user_id, saying_id: Number(sayingId) }});
      // 유저가 해당 명언에 좋아요를 누른 경우
      if(sayingLikeInfo) {
        // 좋아요를 누른 해당 명언을 찾아 total_like 수를 -1 한다
        const sayingInfo = await sayings.findOne({ where: { id: Number(sayingId) } });
        let minusTotalLike = sayingInfo.total_like - 1;
        await sayingInfo.update({ total_like: minusTotalLike });
        // saying_likes 테이블에서 좋아요 누른 행을 삭제해준다
        saying_likes.destroy({ where: { user_id: user_id, saying_id: sayingId }});

        return res.status(200).json({ message: 'no more like it!'});
      }
      // 유저가 명언에 좋아요를 누르지 않은 경우, 다음을 응답한다
      else {
        return res.status(400).json({ message: 'invalid request'});
      }
    } catch (err) {
      return res.status(500).json({ message: 'Server Error!' });
    }
  }
};