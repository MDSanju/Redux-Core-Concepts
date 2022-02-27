import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./containers/Header";
import ProductListing from "./containers/ProductListing";
import ProductDetail from "./containers/ProductDetail";
import NoMatch from "./containers/NoMatch";
import ProductComponent from "./containers/ProductComponent";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/home" element={<ProductListing />} />
          <Route path="/productComponent" element={<ProductComponent />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
