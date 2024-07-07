import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./componenets/Home";
import Nav from "./componenets/Nav";
import UserDetails from "./componenets/UserDetails";
import Edit from "./componenets/Edit";
import Create from "./componenets/Create";

const App = () => {
  const [id, setId] = useState(0);
  return (
    <div>
      <BrowserRouter>
        <div>
          <Nav />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/userdetails" element={<UserDetails setId = {setId} />} />
          <Route path="/edit/:id" element={<Edit id={id}/>} />
          <Route path="/create" element={<Create  />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
