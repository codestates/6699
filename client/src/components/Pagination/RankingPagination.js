import style from './RankingPagination.module.css'

function Pagination ({rankingPerPage,totalRanking, paginate}){
  const pageNumbers = [];

  for(let i=1; i <= Math.ceil(totalRanking/rankingPerPage); i++){
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul id={style.wrap}>
        {pageNumbers.map(number =>(
          <li className={style.btns} key ={number}>
            <button id= {style.btn} onClick={()=>{
              window.scrollTo(0, 0);
              paginate(number);
            }}>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination