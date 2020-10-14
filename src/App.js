import React from "react";
import Product from "./Product";
import { productList } from "./product-list";

function App() {
  return (
    <div className="App">
      <div className="main-block">
        <div className="container">
          <div className="title">Ты сегодня покормил кота?</div>

          <div className="product-list">
            {productList.map((product, idx) => (
              <Product product={product} key={idx} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
