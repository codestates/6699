import '../pages/PostingPage.css'
function PostingPage(){
    return(
    <div className= 'posting-container'>

    <div className='posting-jumbotron-wrapper'>
    <div className='posting-jumbotron'>
      <div className='posting-left-66'/>
      <div className='posting-right-99'/>
      <div className='posting-saying'>땀은 지방의 눈물이다.</div>
    </div>
    </div>
     
    <div className= 'posting-under-jumbotron'>
    <div id='posting-title-box'>
    <p id='posting-title'>0627 서핑은 못참지</p>
    <div id='posting-setting'></div>
    </div>
    <div id='posting-image'></div>

   <div id= 'posting-top-wrapper'>
   <div className= 'posting-like-wrapper'>
    <div id='posting-like-button'></div>
    <p>63</p>
    <div id='posting-view'></div>
    <p>87</p>
    </div>

    <div className= 'posting-user-box'>
    <div id='posting-user-profile-image'></div>
    <p>다급한너구리님</p>
    </div>
    
    </div>
    <div className= 'posting-down-wrapper'>

    <div id='posting-content-boundary'>
     <div id='posting-content'>
      전부터 서핑해보고 싶었는데 살도 뺄겸 취미도 만들겸 도전해봄ㅋㅋ
      </div>
    </div>
      <div id='posting-created-at'>21년06월27일</div>

    <div className='posting-comment-writting-container'>
    <div id='posting-writting-comment-border'>
     <div id='posting-user-image'></div>
     <p>나꼬북(으)로 댓글달기...</p>
    </div>
    <button id='posting-make-comment'>게시하기</button>
    </div>

    <div className='posting-posted-comment-container'>
    <div id='posting-comment-border'>
     <div id='posting-user-image2'></div>
     <p>나도 살빼야되는데ㅜ<br/>눈팅 그만하고싶어여</p>
    </div>
    <p id='posting-comment-created-at'>30분전</p>
    <p id='posting-comment-user'>뱃살대장보노님</p>
    </div>

    <div className='posting-posted-comment-container2'>
    <div id='posting-comment-border'>
     <div id='posting-user-image3'></div>
     <p>너구리님 실행력이 되게 좋으시네요<br/>
     자극받고 갑니다~</p>
    </div>
    <p id='posting-comment-created-at'>2시간전</p>
    <p id='posting-comment-user'>부리부리너부리님</p>
    </div>

    </div>
    <button id='posting-see-more-btn'>더보기</button>
  </div> 
  </div>
    )
}
export default PostingPage;