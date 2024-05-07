import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthContext/AuthProvider";
import Swal from "sweetalert2";

const UserProductRow = ({ product, index }) => {
  const { _id, productName, quantity, unit, description } = product;
  const { user } = useContext(AuthContext);

  // Function to open the modal with a dynamic ID
  const openModal = (modalId) => {
    document.getElementById(modalId).showModal();
  };

  const handleAddRequestProductData = (event) => {
    event.preventDefault();
    const form = event.target;
    const productName = form.productName.value;
    const quantity = form.quantity.value;
    const requestQuantity = form.requestQuantity.value;
    const unit = form.unit.value;
    const unitPrice = form.unitPrice.value;
    const remarks = form.remarks.value;

    const userName = user?.displayName;
    const userEmail = user?.email;
    const date = new Date().toLocaleDateString();
    const totalPrice = unitPrice * requestQuantity;
    const productData = {
      userName,
      userEmail,
      date,
      productName,
      quantity,
      remarks,
      unit,
      unitPrice,
      requestQuantity,
      totalPrice,
      status: "Requested",
      prNo: "",
    };
    console.log(productData);

    fetch("http://localhost:5000/requestProduct", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(productData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Product Request successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <tr>
      {/* <td className="w-1/12">{index + 1}</td>
      <td className="w-2/12">{productName}</td>
      <td className="w-2/12">{quantity}</td>
      <td className="w-2/12">{remarks}</td>
      <td className="w-4/12 text-justify">{description}</td>
      <td className="w-1/12"> */}

      <td className="">{index + 1}</td>
      <td className="">{productName}</td>
      <td className="">{quantity}</td>
      <td className="">{unit}</td>
      <td className=" text-justify">{description}</td>
      <td className="">
        {/* <button
          className="btn hover:shadow-form rounded-md bg-gray-800 py-3 px-8 text-center text-sm font-semibold text-white outline-none ms-20"
          onClick={() => openModal(_id)} // Use the _id to create a unique ID for the modal
        >
          Request
        </button> */}

        <label
          htmlFor={_id}
          className=" btn hover:shadow-form rounded-md bg-gray-800 py-3 px-8 text-center text-sm font-semibold text-white outline-none ms-20"
        >
          Request
        </label>
      </td>

      <input type="checkbox" id={_id} className="modal-toggle" />
      <div className="modal">
        {" "}
        <div className="modal-box">
          <form onSubmit={handleAddRequestProductData}>
            <div className="form-control ">
              <label className="label">
                <span className="label-text block text-sm font-medium text-gray-700 mt-2">
                  Product Name
                </span>
              </label>
              <input
                type="text"
                defaultValue={productName}
                name="productName"
                disabled
                placeholder="Product Name"
                className="input input-bordered  w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-sm font-small text-[#6B7280] outline-none focus:border-green-500 focus:shadow-md"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text block text-sm font-medium text-gray-700 mt-2">
                  Current Stock
                </span>
              </label>
              <input
                type="number"
                name="quantity"
                defaultValue={quantity}
                disabled
                placeholder="Current Stock"
                className="input input-bordered  w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-sm font-small text-[#6B7280] outline-none focus:border-green-500 focus:shadow-md"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text block text-sm font-medium text-gray-700 mt-2">
                  Unit
                </span>
              </label>
              <input
                type="text"
                name="unit"
                defaultValue={unit}
                disabled
                placeholder="Unit"
                className="input input-bordered  w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-sm font-small text-[#6B7280] outline-none focus:border-green-500 focus:shadow-md"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text block text-sm font-medium text-gray-700 mt-2">
                  Request Quantity
                </span>
              </label>
              <input
                type="number"
                name="requestQuantity"
                defaultValue=""
                required
                placeholder="Request Quantity"
                className="input input-bordered  w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-sm font-small text-[#6B7280] outline-none focus:border-green-500 focus:shadow-md"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text block text-sm font-medium text-gray-700 mt-2">
                  Unit Price
                </span>
              </label>
              <input
                type="number"
                name="unitPrice"
                required
                defaultValue=""
                placeholder="Unit Price"
                className="input input-bordered  w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-sm font-small text-[#6B7280] outline-none focus:border-green-500 focus:shadow-md"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text block text-sm font-medium text-gray-700 mt-2">
                  Remarks
                </span>
              </label>
              <input
                type="text"
                name="remarks"
                defaultValue=""
                required
                placeholder="Remarks"
                className="input input-bordered  w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-sm font-small text-[#6B7280] outline-none focus:border-green-500 focus:shadow-md"
              />
            </div>

            <div className="form-control mt-8 mb-16">
              <input
                className="btn bg-gray-800 text-white btn-block"
                type="submit"
                value="Submit"
                // onClick={() => {

                //   handleAddRequestProductData();
                // }}
              />
            </div>

            <div className="modal-action">
              <label
                htmlFor={_id}
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </label>
            </div>
          </form>
        </div>
      </div>
    </tr>
  );
};

export default UserProductRow;
