import './MyPageCategory.css';
function MyPageCategory(){
  return (
    <div className='my-category-container'>
      <div className='my-category-bar'>
        <div className='my-category-saying'>나의 게시물</div> 
        <div className='my-category-post'>
            나의 명언
            </div>  
        <div className='my-category-comment'>내가 쓴 댓글</div>
        <div className='my-category-like'>좋아요</div>
      </div>
    </div>
  )
}
export default MyPageCategory;