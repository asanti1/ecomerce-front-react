import Pagination from "react-bootstrap/Pagination";
import "../../index.css";

export const GeneralPagination = (props) => {
  return (
    <>
      <ul className="pagination justify-content-md-end me-5">
        <li className="page-item">
          <a className="page-link pagination-item" href="#">
            Previous
          </a>
        </li>
        <li className="page-item pagination-item">
          <a className="page-link" href="#">
            1
          </a>
        </li>
        <li className="page-pagination-item">
          <a className="page-link" href="#">
            2
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            3
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            Next
          </a>
        </li>
      </ul>
    </>
  );
};

/*
 */
