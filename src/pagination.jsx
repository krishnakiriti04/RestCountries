import React from 'react'

function Pagination({itemsPerPage, totalItems, paginate, currPage}) {
    const pageNumbers = [];

    for(let i=1;i<Math.ceil(totalItems / itemsPerPage);i++)
    {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="pagination bg-dark">
                    <li className={currPage === 1 ? "page-item disabled" : "page-item"}>
                    <a className="page-link" href="!#" onClick={()=>paginate(currPage-1)} aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                    </a>
                  </li>
                    {
                    pageNumbers.map(number=>(
                        <li key={number} className={currPage === number ? "page-item active" : "page-item"}>
                            <a href="!#" 
                                onClick={()=>paginate(number)} 
                                className="page-link"
                            >{number}</a>
                        </li>
                    ))
                    }
                    <li className={currPage === pageNumbers.length ? "page-item disabled" : "page-item"}>
                        <a className="page-link" href="!#" onClick={()=>paginate(currPage+1)} aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
            </ul>
        </nav>
    )
}

export default Pagination
