import style from './MyCommentBox.module.css'
function MyCommentBox(){
    return (
        <div className={style.box}>
        <div className={style.category_image}></div>
        <div id={style.trashcan}></div>
       
       <div id={style.set_title_middle_box}>
        <div className={style.title}>
        <p id={style.saying}>너구리님 실행력이 되게 좋으시네요</p>
        </div>
        </div>
    
        <div className={style.icon_box}>
        <div id={style.heart}></div>
        <div id={style.post}></div>
       </div>
       </div>
    )
}
export default MyCommentBox;