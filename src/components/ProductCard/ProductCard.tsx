import React from "react";
import Image from "next/image";

interface Product {
  name: string;
  imageUrl: string;
  productType: string;
}

function ProductCard(props: Product) {
  return (
    <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 gap-5 mt-6 mx-14">
      <div className="flex flex-col border border-[#dbdce1] rounded-lg">
        <div className="flex justify-center w-full background-color--light">
          <Image
            className=""
            alt={props.name}
            height={124}
            width={124}
            src={props.imageUrl}
          />
        </div>
        <div className="mt-3 ml-3 mb-3">
          <div>{props.name}</div>
          <div className="text-sm text-gray-600">{props.productType}</div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
