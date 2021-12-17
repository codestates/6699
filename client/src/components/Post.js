import './Post.css';
import {Link} from 'react-router-dom';
function Post(){
  return (
    <div className='post-container'>
      <div className='post-like-box'>
        <div className='post-like-toggle' />
        <div className='post-like-word'></div>
      </div>
      <div className='post-post-box'>
        <div className='post-post-box-low'>
          <div className='post-post-box-low-post'>
            <Link className='post-post-link' to='/postingpage'/>
          </div>
          <div className='post-post-box-low-post'>
            <Link className='post-post-link' to='/postingpage'/>
          </div>
          <div className='post-post-box-low-post'>
            <Link className='post-post-link' to='/postingpage'/>     
          </div>
        </div>
        <div className='post-post-box-low'>
          <div className='post-post-box-low-post'>
            <Link className='post-post-link' to='/postingpage'/>
          </div>
          <div className='post-post-box-low-post'>
            <Link className='post-post-link' to='/postingpage'/>
          </div>
          <div className='post-post-box-low-post'>
            <Link className='post-post-link' to='/postingpage'/>
          </div>
        </div>
        <div className='post-post-box-low'>
          <div className='post-post-box-low-post'>
            <Link className='post-post-link' to='/postingpage'/> 
          </div>
          <div className='post-post-box-low-post'>
            <Link className='post-post-link' to='/postingpage'/>
          </div>
          <div className='post-post-box-low-post'>
            <Link className='post-post-link' to='/postingpage'/> 
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

    </div>
  )
}
export default Post;