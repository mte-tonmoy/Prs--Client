import React, { useEffect, useState } from "react";
import MovingText from "react-moving-text";

import NavBar from "../NavBar";
import useAddPr from "../../hooks/useAddPr";
import useMyRequest from "../../hooks/useMyRequest";
import MyRequestRow from "./MyRequestRow";
import Nav from "../Nav";

const MyRequest = () => {
  const [myRequest, refetch] = useMyRequest([]);
  console.log(myRequest);

  return (
    <>
      {/* <Nav /> */}
      {/* <div>
        <MovingText
        type="animation_type"
        duration="1000ms"
        delay="0s"
        direction="normal"
        timing="ease"
        iteration="infinite"
        fillMode="none"
        className="mt-20"
      >
        Content...
      </MovingText>
      </div> */}
      <div className=" pt-20">
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
                <th>PR No</th>
              </tr>
            </thead>
            <tbody>
              {myRequest.map((product, index) => (
                <MyRequestRow
                  key={product._id}
                  product={product}
                  index={index}
                  refetch={refetch}
                ></MyRequestRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MyRequest;
