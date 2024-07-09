import axios from "axios";
import React, { useEffect, useState } from "react";
import "./styles/homestyle.css";

const Home = () => {
  const [productsData, setProductsData] = useState([]); //Product State Management
  useEffect(() => {
    fetchData();
  }, []); //Get Call UseEffect
  const fetchData = async () => {
    await axios
      .get("https://6671157ee083e62ee439f788.mockapi.io/api/v9/todo") //MockAPI get call on AXIOS
      .then((res) => setProductsData(res.data))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className="container">
        <h1 className="text-center mt-5" id="heading">Furry Friends</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
        {productsData.map((item, index) => {
          //Product Mapping
          return (
            <>
              <div key={index}>
                {" "}
                {/*Displaying on UI Product Card */}
                <div className="col" id="card-design">
                  <div className="card">
                    <img
                      src={item.product_image}
                      className="card-img-top"
                      alt="img"
                    />
                    <div className="card-body">
                      <h6 className="card-title">{item.product_id}</h6>
                      <h5 className="card-title">{item.product_name}</h5>
                      <h5 className="card-title">{item.product_price}</h5>
                      <p className="card-text">{item.product_description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
      </div>
    </div>
  );
};

export default Home;
