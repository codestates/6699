import './MainPage.css'
import MainPageSaying from '../components/MainPageSaying';
import MainPageCategory from '../components/MainPageCategory';
import Post from '../components/Post';
import Footer from '../components/Footer';
import PostMiniModal from '../components/PostMiniModal';
import {Routes, Route} from 'react-router-dom';
function MainPage(){
  return (
    <div className='main-container'>
      <MainPageSaying />
      <MainPageCategory />
      <Post/>
      <div className='main-footer'>
        <Footer />
      </div>
    </div>
  )
}
export default MainPage;