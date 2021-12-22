import style from './MainPagination.module.css'

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