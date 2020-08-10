import React from 'react'
import ProductTile from "../../components/ProductTile"
import API from "../../utils/API"
import "./style.css"


export default function ProductsPage() {
  return (
    <div className="ProductsPage products">
      <ProductTile name="test" brand="test" price={80} quantity={10} />
      <ProductTile name="test" brand="test" price={80} quantity={10} />
      <ProductTile name="test" brand="test" price={80} quantity={10} />

    </div>

  );
}

