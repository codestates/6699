import style from './MyPagePagenation.module.css'
function MainPagePagenation(){
    return (
        <div className = {style.page_buttons}>
        <button id={style.pagenation}>1</button>
        <button id={style.pagenation_2}>2</button>
        </div>
    )
}
export default MainPagePagenation;