import style from '../pages/PostingPage.module.css'
function PostingPage(){
    return(
    <div className= {style.container}>

    <div className={style.jumbotron_wrapper}>
    <div className={style.jumbotron}>
      <div className={style.left_66}/>
      <div className={style.right_99}/>
      <div className={style.saying}>땀은 지방의 눈물이다.</div>
    </div>
    </div>
     
    <div className= {style.under_jumbotron}>
    <div id={style.title_box}>
    <p id={style.title}>0627 서핑은 못참지</p>
    <div id={style.setting}></div>
    </div>
    <div id={style.image}></div>

   <div id= {style.top_wrapper}>
   <div className= {style.like_wrapper}>
    <div id={style.like_button}></div>
    <p>63</p>
    <div id={style.view}></div>
    <p>87</p>
    </div>

    <div className= {style.user_box}>
    <div id={style.user_profile_image}></div>
    <p>다급한너구리님</p>
    </div>
    
    </div>
    <div className= {style.down_wrapper}>

    <div id={style.content_boundary}>
     <div id={style.content}>
      전부터 서핑해보고 싶었는데 살도 뺄겸 취미도 만들겸 도전해봄ㅋㅋ
      </div>
    </div>
      <div id={style.created_at}>21년06월27일</div>

    <div className={style.comment_writting_container}>
    <div id={style.writting_comment_border}>
     <div id={style.user_image}></div>
     <p>나꼬북(으)로 댓글달기...</p>
    </div>
    <button id={style.make_comment}>게시하기</button>
    </div>

    <div className={style.posted_comment_container}>
    <div id={style.comment_border}>
     <div id={style.user_image2}></div>
     <p>나도 살빼야되는데ㅜ<br/>눈팅 그만하고싶어여</p>
    </div>
    <p id={style.comment_created_at}>30분전</p>
    <p id={style.comment_user}>뱃살대장보노님</p>
    </div>

    <div className={style.posted_comment_container2}>
    <div id={style.comment_border}>
     <div id={style.user_image3}></div>
     <p>너구리님 실행력이 되게 좋으시네요<br/>
     자극받고 갑니다~</p>
    </div>
    <p id={style.comment_created_at}>2시간전</p>
    <p id={style.comment_user}>부리부리너부리님</p>
    </div>

    </div>
    <button id={style.see_more_btn}>더보기</button>
  </div> 
  </div>
    )
}
export default PostingPage;