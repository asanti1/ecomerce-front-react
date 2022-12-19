import Pagination from "react-bootstrap/Pagination";

export const GeneralPagination = (props) => {
  return (
    <>
      <Pagination expand="lg" className="justify-content-md-end mr-5">
        <Pagination.First />
        <Pagination.Prev />
        <Pagination.Item>{props.items}</Pagination.Item>
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
    </>
  );
};
