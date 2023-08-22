"use client";
import React from "react";

import ProductToolbar from "../ProductToolbar/ProductToolbar";
import ProductCard from "../ProductCard/ProductCard";
import ProductTable from "../ProductTable/ProductTable";

// Data fetching
import useSWR from "swr";

interface ProductLayout {
  isTable: boolean;
}

function ProductLayout(props: ProductLayout) {
  props.isTable = false;

  const UIDB_URL = "https://static.ui.com/fingerprint/ui/public.json";
  const UIDB_IMAGE_URL = "https://static.ui.com/fingerprint/ui/icons";
  const fetcher = async (url: RequestInfo | URL) =>
    fetch(url).then((res) => res.json());

  const { data, error } = useSWR(UIDB_URL, fetcher);
  if (error)
    return (
      <div>
        <h1>404</h1>
        <p>Loading failed...</p>
      </div>
    );
  if (!data)
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );

  return (
    <>
      <ProductToolbar />
      {data &&
        data.devices.map(
          (device: {
            id: React.Key | null | undefined;
            product: { name: string };
            line: { name: string };
            icon: { resolutions: number[]; id: string };
          }) => (
            <>
              {!props.isTable ? (
                <ProductCard
                  key={device.id}
                  name={device.product.name}
                  productType={device.line.name}
                  imageUrl={`${UIDB_IMAGE_URL}/${device.icon.id}_257x257.png`}
                />
              ) : (
                <ProductTable
                  key={device.id}
                  name={device.product.name}
                  productLine={device.line.name}
                  imageUrl={`${UIDB_IMAGE_URL}/${device.icon.id}_25x25.png`}
                />
              )}
            </>
          )
        )}
    </>
  );
}

export default ProductLayout;
