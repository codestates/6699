/*****done*****/
import style from './MainPage.module.css'
import MainPageSaying from '../components/MainPage/MainPageSaying';
import MainPageCategory from '../components/MainPage/MainPageCategory';
import Post from '../components/MainPage/Post';
import Footer from '../components/Footer';
import {Routes, Route} from 'react-router-dom';
function MainPage(){
  return (
    <div className={style.container}>
      <MainPageSaying />
      <MainPageCategory />
      <Post/>
      <div className={style.footer}>
        <Footer />
      </div>
    </div>
  )
}
export default MainPage;