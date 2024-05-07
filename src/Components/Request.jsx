import React, { useEffect, useState } from "react";
import MovingComponent from "react-moving-text";
import NavBar from "./NavBar";
import UserProductRow from "./UserProductRow";
import Nav from "./Nav";

const Request = () => {
  const [allProduct, setAllProduct] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allProduct")
      .then((res) => res.json())
      .then((data) => setAllProduct(data));
  }, []);
  return (
    <>
      <div className=" flex flex-col items-center    p-12">
        <div className="w-11/12">
          <div className="overflow-x-auto">
            <table className="table border">
              {/* head */}
              <thead>
                <tr className="">
                  <th className="w-1/12">SN</th>
                  <th className="w-2/12">Item Name</th>
                  <th className="w-2/12">Item Quantity</th>
                  <th className="w-2/12">Unit</th>
                  <th className="w-4/12 text-justify">Description</th>
                  <th className="w-1/12"></th>
                </tr>
              </thead>
              <tbody>
                {allProduct.map((product, index) => (
                  <UserProductRow
                    key={product._id}
                    product={product}
                    index={index}
                  ></UserProductRow>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Request;
