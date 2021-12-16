import './MainPageCategory.css'
function MainPageCategory(){
  return (
    <div className='main-category-container'>
      <div className='main-category-bar'>
        <div className='main-category-all'>전체</div>
        <div className='main-category-health'>건강</div>
        <div className='main-category-study'>학습</div>
        <div className='main-category-economy'>경제</div>
        <div className='main-category-relation'>인간관계</div>
        <div className='main-category-love'>사랑</div>
      </div>
    </div>
  )
}
export default MainPageCategory;