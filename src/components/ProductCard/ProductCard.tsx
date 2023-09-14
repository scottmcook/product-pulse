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
      {products.map(
        (product: {
          id: React.Key | null | undefined;
          title: string;
          category: string;
          image: string;
          icon: { resolutions: number[]; id: string };
        }) => {
          return (
            <div
              key={product.id}
              className="flex flex-col pt-3 border border-[#dbdce1] rounded-lg hover:scale-110 transition duration-200 cursor-pointer object-cover"
            >
              <Image
                className="self-center"
                alt={product.title}
                height={150}
                width={150}
                src={product.image}
                style={{ objectFit: "contain", height: 150 }}
              />
              <div className="mt-3 ml-3 mb-3">
                <div>{product.title}</div>
                <div className="text-sm text-gray-600">{product.category}</div>
              </div>
            </div>
          );
        }
      )}
    </>
  );
}

export default ProductCard;
