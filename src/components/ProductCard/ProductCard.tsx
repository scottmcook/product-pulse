import React from "react";
import Image from "next/image";

// interface Product {
//   product:
// }
interface Product {
  id: React.Key | null | undefined;
  product: { name: string };
  line: { name: string };
  icon: { resolutions: number[]; id: string };
}
const UIDB_IMAGE_URL = "https://static.ui.com/fingerprint/ui/icons";

function ProductCard({ products }) {
  return (
    <>
      {products.devices.map(
        (product: {
          id: React.Key | null | undefined;
          product: { name: string };
          line: { name: string };
          icon: { resolutions: number[]; id: string };
        }) => {
          return (
            <div
              key={product.id}
              className="flex flex-col border border-[#dbdce1] rounded-lg hover:scale-110 transition duration-200 cursor-pointer object-cover"
            >
              <div className="flex justify-center w-full background-color--light">
                <Image
                  className=""
                  alt={product.product.name}
                  height={124}
                  width={124}
                  src={`${UIDB_IMAGE_URL}/${product.icon.id}_257x257.png`}
                />
              </div>
              <div className="mt-3 ml-3 mb-3">
                <div>{product.product.name}</div>
                <div className="text-sm text-gray-600">{product.line.name}</div>
              </div>
            </div>
          );
        }
      )}
      ;
    </>
  );
}

export default ProductCard;
