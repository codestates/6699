import './MainPage.css'
import MainPageSaying from '../components/MainPageSaying';
import MainPageCategory from '../components/MainPageCategory';
import Post from '../components/Post';
function MainPage(){
  return (
    <div className='main-container'>
      <MainPageSaying />
      <MainPageCategory />
      <Post />
    </div>
  )
}
export default MainPage;