import React from "react";
import Image from "next/image";

interface Product {
  name: string;
  imageUrl: string;
}

function ProductCard(props: Product) {
  return (
    <div className="flex flex-col border border-[#dbdce1] h-48 rounded-lg">
      <div>
        <Image alt={props.name} height={124} width={100} src={props.imageUrl} />
      </div>
      <div>{props.name}</div>
    </div>
  );
}

export default ProductCard;
