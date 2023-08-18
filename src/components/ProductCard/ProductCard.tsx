import React from "react";

interface Product {
  name: String;
}

function ProductLayout(props: Product) {
  return (
    <div className="border border-[#dbdce1] h-48 rounded-lg">{props.name}</div>
  );
}

export default ProductLayout;
