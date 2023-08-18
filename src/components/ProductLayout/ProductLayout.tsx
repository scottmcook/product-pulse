import React from "react";
import ProductCard from "../ProductCard/ProductCard";

function ProductLayout() {
  return (
    <>
      <div className="grid grid-cols-5 gap-5 mt-6 mx-14">
        <ProductCard name={"PlaceholderProductCard"} />
        <ProductCard name={"PlaceholderProductCard"} />
        <ProductCard name={"PlaceholderProductCard"} />
        <ProductCard name={"PlaceholderProductCard"} />
        <ProductCard name={"PlaceholderProductCard"} />
        <ProductCard name={"PlaceholderProductCard"} />
        <ProductCard name={"PlaceholderProductCard"} />
      </div>
    </>
  );
}

export default ProductLayout;
