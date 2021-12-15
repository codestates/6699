import './Post.css';
function Post(){
  return (
    <div className='post-container'>
      <div className='post-like-box'>
        <div className='post-like-toggle' />
        <div className='post-like-word'>좋아요 순</div>
      </div>
      <div className='post-post-box'>
        <div className='post-post-box-low'>
          <div className='post-post-box-low-post'>

          </div>
          <div className='post-post-box-low-post'>
            
          </div>
          <div className='post-post-box-low-post'>
              
          </div>
        </div>
      </div>
      <div className='post-page-box'>
        <div className='post-page-box-left-arrow'/>
        <div className='post-page-box-right-arrow'/>
        <div className='post-page-box-number'/>
        <div className='post-page-box-number'/>
        <div className='post-page-box-number'/>
      </div>
      <div className='post-plus-button'/>
    </div>
  )
}
export default Post;