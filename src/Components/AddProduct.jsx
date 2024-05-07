import React, { useEffect, useState } from "react";
import AllProductRow from "./AllProductRow";
import Swal from "sweetalert2";

const AddProduct = () => {
  const [allProduct, setAllProduct] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/allProduct")
      .then((res) => res.json())
      .then((data) => setAllProduct(data));
  }, []);

  const handleAddProductData = (event) => {
    event.preventDefault();
    const form = event.target;
    const productName = form.productName.value;
    const quantity = form.quantity.value;
    const unit = form.unit.value;
    const description = form.description.value;
    event.target.reset();

    const productData = {
      productName,
      quantity,
      unit,
      description,
    };

    fetch("http://localhost:5000/addProduct", {
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
            title: "Product Added successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const filteredProducts = allProduct.filter(
    (product) =>
      product.productName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="flex flex-col md:flex-row py-5">
        <div className="shadow-lg p-8 rounded-lg md:w-2/6  h-fit">
          <form onSubmit={handleAddProductData}>
            <div className="form-control ">
              <label className="label">
                <span className="label-text block text-sm font-medium text-gray-700 mt-2">
                  Product Name
                </span>
              </label>
              <input
                type="text"
                name="productName"
                placeholder="Product Name"
                required
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
                required
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
                defaultValue=""
                required
                placeholder="Unit"
                className="input input-bordered  w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-sm font-small text-[#6B7280] outline-none focus:border-green-500 focus:shadow-md"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text block text-sm font-medium text-gray-700 mt-2">
                  Description
                </span>
              </label>
              <textarea
                name="description"
                required
                className="textarea textarea-bordered w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-sm font-small text-[#6B7280] outline-none focus:border-green-500 focus:shadow-md"
                placeholder="Write the product description"
              ></textarea>
            </div>

            <div className="form-control mt-8 mb-16">
              <input
                className="btn bg-gray-800 text-white btn-block"
                type="submit"
                value="Add "
              />
            </div>
          </form>
        </div>

        <div className="overflow-x-auto ml-5 ">
          <input
            type="text"
            placeholder="Search products"
            className="border rounded-md p-2 mb-4"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <table className="table border ">
            <thead>
              <tr className="text-center">
                <th className="w-1/12">SN</th>
                <th className="w-2/12">Product Name</th>
                <th className="w-2/12">Current Stock</th>
                <th className="w-2/12">Unit</th>
                <th className="w-3/12">Description</th>
                <th className="w-1/12"></th>
                <th className="w-1/12"></th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product, index) => (
                <AllProductRow
                  key={product._id}
                  product={product}
                  index={index}
                ></AllProductRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
