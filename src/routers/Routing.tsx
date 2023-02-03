import React from 'react';
import { Route , Routes} from "react-router-dom";
import Homepage from "../components/pages/Home";
import About from "../components/pages/About";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}/>
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default Routing;


