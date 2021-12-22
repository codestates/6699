<<<<<<< HEAD
=======

>>>>>>> a47500496db3d82e18861cd94ae23594db338c3d
import style from './MyPostPagination.module.css'

function Pagination ({postsPerPage,totalPosts, paginate}){
  const pageNumbers = [];

  for(let i=1; i <= Math.ceil(totalPosts/postsPerPage); i++){
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul id={style.wrap}>
        {pageNumbers.map(number =>(
          <li className={style.btns} key ={number}>
            <button id= {style.btn} onClick={()=> paginate(number)}>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination