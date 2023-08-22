import React from "react";
import Image from "next/image";

interface ProductTable {
  name: string;
  imageUrl: string;
  productLine: string;
}

function ProductTable(props: ProductTable) {
  return (
    <tr>
      <td>
        <Image
          className=""
          alt={props.name}
          height={25}
          width={25}
          src={props.imageUrl}
        />
      </td>
      <td>{props.productLine}</td>
      <td>{props.name}</td>
    </tr>
  );
}

export default ProductTable;
