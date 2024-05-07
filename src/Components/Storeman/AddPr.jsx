import React, { useEffect, useState } from "react";
import useAddPr from "../../hooks/useAddPr";
import AddPrRow from "./AddPrRow";
import MovingComponent from 'react-moving-text'
const AddPr = () => {
  const [addPr, refetch] = useAddPr([]);
  console.log(addPr);

  return (
    <>
      <div className="">
      <MovingComponent
              type="fadeInFromLeft"
              duration="3000ms"
              delay="0s"
              direction="normal"
              timing="ease"
              iteration="1"
              fillMode="none"
              className="text-2xl font-bold leading-9 tracking-wider text-gray-700 "
            >
             Add PR
            </MovingComponent>
        <div className="overflow-x-auto mt-5 ">
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
                <th>PR No</th>
              </tr>
            </thead>
            <tbody>
              {addPr.map((product, index) => (
                <AddPrRow
                  key={product._id}
                  product={product}
                  index={index}
                  refetch={refetch}
                ></AddPrRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AddPr;
