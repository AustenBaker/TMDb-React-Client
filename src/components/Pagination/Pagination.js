import "./Pagination.css";

export default function Pagination(props) {
  let currentPage = props.currentPage;
  let totalPages = props.totalPages

  function nextPage(){
    if(currentPage < totalPages) {
      props.setCurrentPage(currentPage => currentPage + 1);
    }
  }
  function prevPage(){
    if(currentPage > 1) {
      props.setCurrentPage(currentPage => currentPage - 1);
    }
  }

  return(
    <div className="paginationContainer">
      <span className="prevPageButton" onClick={() => prevPage()}>{"<"} prev</span>
      <p className="pageCounter"> {currentPage} / {totalPages} </p>
      <span className="nextPageButton" onClick={() => nextPage()}>next {">"}</span>
    </div>
)
}