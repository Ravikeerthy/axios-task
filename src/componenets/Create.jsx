import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const [createData, setCreateData] = useState({
    product_id: "",
    product_name: "",
    product_price: "",
    product_description: "",
  });

  const handleUpdate = async (e) => {
    e.preventDefault();
    await axios
      .post(
        `https://6671157ee083e62ee439f788.mockapi.io/api/v9/todo/`,
        createData
      )
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    navigate("/userdetails");
  };

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setCreateData((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };
  return (
    <>
      <div className="container">
        <form action="" onSubmit={handleUpdate}>
          <div className="mb-3">
            <label for="formGroupExampleInput2" className="form-label">
              Product Id
            </label>
            <input
              type="text"
              className="form-control"
              onChange={handleOnchange}
              id="formGroupExampleInput2"
              name="product_id"
              value={createData.product_id}
            />
          </div>
          <div className="mb-3">
            <label for="formGroupExampleInput" className="form-label">
              Product Name
            </label>
            <input
              type="text"
              className="form-control"
              onChange={handleOnchange}
              id="formGroupExampleInput"
              name="product_name"
              value={createData.product_name}
            />
          </div>
          <div className="mb-3">
            <label for="formGroupExampleInput2" className="form-label">
              Product Price
            </label>
            <input
              type="text"
              className="form-control"
              onChange={handleOnchange}
              id="formGroupExampleInput2"
              name="product_price"
              value={createData.product_price}
            />
          </div>
          <div className="mb-3">
            <label for="formGroupExampleInput2" className="form-label">
              Product Description
            </label>
            <input
              type="text"
              className="form-control"
              onChange={handleOnchange}
              id="formGroupExampleInput2"
              name="product_description"
              value={createData.product_description}
            />
          </div>
          <div>
            <button className="btn btn-primary" type="submit">
              Create
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Create;
