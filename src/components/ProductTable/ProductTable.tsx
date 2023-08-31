import React from "react";
import Image from "next/image";

interface ProductTable {
  name: string;
  imageUrl: string;
  productLine: string;
}

const UIDB_IMAGE_URL = "https://static.ui.com/fingerprint/ui/icons";

function ProductTable({ products }) {
  return (
    <table className="table-auto">
      <colgroup>
        <col span={1} className=""></col>
        <col span={1} className=""></col>
        <col span={1} className="w-2/3"></col>
      </colgroup>
      <thead className="text-left uppercase">
        <tr>
          <th></th>
          <th>Product Line</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {products.devices.map(
          (product: {
            id: React.Key | null | undefined;
            product: { name: string };
            line: { name: string };
            icon: { resolutions: number[]; id: string };
          }) => (
            <tr key={product.id}>
              <td>
                <Image
                  className=""
                  alt={product.product.name}
                  height={25}
                  width={25}
                  src={`${UIDB_IMAGE_URL}/${product.icon.id}_25x25.png`}
                />
              </td>
              <td>{product.line.name}</td>
              <td>{product.product.name}</td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
}

export default ProductTable;
