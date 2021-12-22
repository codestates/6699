import style from './MyLikedSayingPagination.module.css';

function MyLikedSayingPagination({sayingsPerPage,totalPosts, paginate}){
  const pageNumbers = [];

  for(let i=1; i <= Math.ceil(totalPosts/sayingsPerPage); i++){
    pageNumbers.push(i);
  }

  return (
    <nav>
      <div id={style.wrap}>
        {pageNumbers.map(number =>(
          <li className={style.btns} key ={number}>
            <button id= {style.btn} onClick={()=> paginate(number)}>
              {number}
            </button>
          </li>
        ))}
      </div>
    </nav>
  )
}

export default MyLikedSayingPagination;