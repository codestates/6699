import style from './MyPagePagenationBtn.module.css'
function MainPagePagenationBtn(){
    return (
        <div className = {style.page_buttons}>
        <button id={style.pagenation}>1</button>
        <button id={style.pagenation_2}>2</button>
        </div>
    )
}
export default MainPagePagenationBtn;