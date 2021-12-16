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
    <p>다급한 너구리님</p>
    </div>
    
    </div>
    <div className= 'posting-down-wrapper'>
    <div id='posting-content-boundary'>
     <div id='posting-content'>
      전부터 서핑해보고 싶었는데 살도 뺄겸 취미도 만들겸 도전해봄ㅋㅋ
      </div>   
    </div>

    <div className='posting-comment-container'>
    <div id='posting-comment-border'>
     <div id='posting-user-image'></div>
     <p>나꼬북(으)로 댓글달기...</p>
    </div>
    </div>
    </div>
  </div> 
  </div>
    )
}
export default PostingPage;