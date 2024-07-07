import { useState } from "react";
import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserDetails = ({ setId }) => {
  const [productData, setProductData] = useState([]);
  const [deleteData, setDeleteData] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    fetchData();
  }, [deleteData]);

  const fetchData = async () => {
    await axios
      .get("https://6671157ee083e62ee439f788.mockapi.io/api/v9/todo")
      .then((res) => setProductData(res.data))
      .catch((err) => console.log(err));
  };

  const handleEdit = (id) => {
    setId(id);
    navigate(`/edit/${id}`);
  };
  const handleRemove = async (id) => {
    await axios
      .delete(`https://6671157ee083e62ee439f788.mockapi.io/api/v9/todo/${id}`)
      .then((res) => {
        setDeleteData(res.data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="container-fluid">
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Num</th>
            <th scope="col">Product ID</th>
            <th scope="col">product Name</th>
            <th scope="col">Product Price</th>
            <th scope="col">Product Description</th>
          </tr>
        </thead>
        <tbody>
          {productData.map((item, index) => {
            return (
              <>
                <tr key={index}>
                  <th scope="row">{item.id}</th>
                  <td>{item.product_id}</td>
                  <td>{item.product_name}</td>
                  <td>{item.product_price}</td>
                  <td> {item.product_description}</td>
                  <div className="d-flex justify-content-evenly">
                    <button
                      type="button"
                      class="btn btn-info"
                      onClick={() => {
                        handleEdit(item.id);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      class="btn btn-danger"
                      onClick={() => handleRemove(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
      <div className="d-flex justify-content-center">
        <button className="btn btn-primary" onClick={()=>{navigate('/create')}}>Create New User</button>
      </div>
    </div>
  );
};

export default UserDetails;
