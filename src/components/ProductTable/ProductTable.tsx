import React from "react";
import Image from "next/image";

interface ProductTable {
  name: string;
  imageUrl: string;
  productLine: string;
}

function ProductTable(props: ProductTable) {
  return (
    <div className="grid mt-6 mx-14">
      <table className="table-auto">
        <colgroup>
          <col span={1} className=""></col>
          <col span={1} className=""></col>
          <col span={1} className="w-2/3"></col>
        </colgroup>
        <thead className="text-left uppercase">
          <tr>
            <th># devices</th>
            <th>Product Line</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
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
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
