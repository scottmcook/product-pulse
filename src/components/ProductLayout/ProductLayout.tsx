"use client";
import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import ProductTable from "../ProductTable/ProductTable";

// Data fetching
import useSWR from "swr";

function ProductLayout() {
  let isTable = false;

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

  if (isTable) {
    return (
      <div className="grid mt-6 mx-14">
        <ProductTable />
      </div>
    );
  }
  return (
    <>
      <div className="grid lg:grid-cols-5 grid-cols-3 gap-5 mt-6 mx-14">
        {data &&
          data.devices.map(
            (device: {
              id: React.Key | null | undefined;
              product: { name: string };
              line: { name: string };
              icon: { resolutions: any[]; id: string };
            }) => (
              <ProductCard
                key={device.id}
                name={device.product.name}
                productType={device.line.name}
                imageUrl={`${UIDB_IMAGE_URL}/${device.icon.id}_${device.icon.resolutions[3][0]}x${device.icon.resolutions[3][0]}.png`}
              />
            )
          )}
      </div>
    </>
  );
}

export default ProductLayout;
