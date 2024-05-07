import React from "react";

const MyRequestRow = ({ product, index, refetch }) => {
  const {
    _id,
    date,
    productName,
    quantity,
    remarks,
    requestQuantity,
    totalPrice,
    unit,
    unitPrice,
    userEmail,
    userName,
      status,
    prNo,
  } = product;


  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        {userName}
        <br></br>
        {userEmail}
      </td>
      <td>{date}</td>
      <td>{productName}</td>
      <td>{quantity}</td>
      <td>{requestQuantity}</td>
      <td>{unit}</td>
      <td>{unitPrice}</td>
      <td>{totalPrice}</td>
      <td>{remarks}</td>
      <td>{status}</td>
      <td>{prNo}</td>
    </tr>
  );
};

export default MyRequestRow;
