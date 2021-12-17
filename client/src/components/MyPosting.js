import '../components/MyPosting.css'
import MyPagePagenation from '../components/MyPagePagenation'
function MyPostingPage(){
    return (
        <div id='my-posting-changing-area'>
        <div id='my-posting-posts-wrap'>
        <div className = 'my-posting-posts'>
        <div id='my-posting-post'></div>
        <div id='my-posting-post'></div>
        <div id='my-posting-post'></div>
        </div>
        <div className='my-posting-posts'>
        <div id='my-posting-post'></div>
        <div id='my-posting-post'></div>
        <div id='my-posting-post'></div>
        </div>
        </div>
        <div id='my-posting-pagenation-wrapper'>
        <MyPagePagenation/>
        </div>
        </div>
    )
}
export default MyPostingPage