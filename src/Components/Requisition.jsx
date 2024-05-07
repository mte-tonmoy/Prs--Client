import React, { useEffect, useState } from "react";
import MovingComponent from "react-moving-text";
import NavBar from "./NavBar";
import AllProductRow from "./AllProductRow";
import Swal from "sweetalert2";
import RequisitionRow from "./RequisitionRow";
import useRequestedProduct from "../hooks/useRequestedProduct";

const Requisition = () => {
  const [requestedProduct, refetch] = useRequestedProduct([]);

  return (
    <>
      <div className=" ">
        <div className="overflow-x-auto mt-5 mx-10">
          <table className="table border">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>
                  User <br></br> Name
                </th>
                <th>Date</th>
                <th>
                  Product <br></br> Name
                </th>
                <th>
                  Current <br></br> Stock
                </th>
                <th>
                  Request <br></br> Quantity
                </th>
                <th>Unit</th>
                <th>
                  Unit <br></br> Price
                </th>
                <th>
                  Total <br></br> Price
                </th>
                <th>Remarks</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {requestedProduct.map((product, index) => (
                <RequisitionRow
                  key={product._id}
                  product={product}
                  index={index}
                  refetch={refetch}
                ></RequisitionRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Requisition;
