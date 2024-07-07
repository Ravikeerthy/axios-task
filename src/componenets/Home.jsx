import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [productsData, setProductsData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    await axios
      .get("https://6671157ee083e62ee439f788.mockapi.io/api/v9/todo")
      .then((res) => setProductsData(res.data))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {productsData.map((item, index) => {
          return (
            <>
              <div key={index}>
                <div className="col">
                  <div className="card">
                    <img
                      src={item.product_image}
                      className="card-img-top"
                      alt="..."
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
  );
};

export default Home;
