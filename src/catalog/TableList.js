import React from "react";
import { Table } from "react-bootstrap";

const TableList = ({ phone }) => {
  let listDetail = [];
  Object.keys(phone).forEach((key) => {
    if (["imageFileName", "id"].indexOf(key) === -1)
      listDetail.push(
        <tr key={key}>
          <td>{key.charAt(0).toUpperCase() + key.substring(1, key.length)}</td>
          <td>{phone[key]}</td>
        </tr>
      );
  });

  return (
    <>
      <h2>Phone Details:</h2>
      <Table className="mr-5" striped bordered hover>
        <tbody>{listDetail}</tbody>
      </Table>
    </>
  );
};

export default TableList;
