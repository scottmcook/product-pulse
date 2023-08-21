import React from "react";
import Image from "next/image";

interface Product {
  name: String;
  imageUrl: String;
}

function ProductCard(props: Product) {
  return (
    <div className="flex flex-col border border-[#dbdce1] h-48 rounded-lg">
      <Image alt={props.name} height={124} width={231} src={props.imageUrl} />
      <div>{props.name}</div>
    </div>
  );
}

export default ProductCard;
