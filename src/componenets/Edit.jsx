import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Edit = ({ id }) => {
  const navigate = useNavigate();
  const [editData, setEditData] = useState({
    product_id: "",
    product_name: "",
    product_price: "",
    product_description: "",
  });
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await axios
      .get(`https://6671157ee083e62ee439f788.mockapi.io/api/v9/todo/${id}`)
      .then((res) => setEditData(res.data))
      .catch((err) => console.log(err));
  };

  const handleUpdate = async (e) => {
    e.preventDefault()
    await axios
      .put(
        `https://6671157ee083e62ee439f788.mockapi.io/api/v9/todo/${id}`,
        editData
      )
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    navigate("/userdetails");
  };

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setEditData((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };
  return (
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
            value={editData.product_id}
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
            value={editData.product_name}
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
            value={editData.product_price}
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
            value={editData.product_description}
          />
        </div>
        <div>
          <button className="btn btn-primary" type="submit">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
