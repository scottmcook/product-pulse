"use client";
import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import ProductTable from "../ProductTable/ProductTable";

// Data fetching
import useSWR from "swr";

function ProductLayout() {
  let isTable = false;

  const UIDB_URL = "https://static.ui.com/fingerprint/ui/public.json";
  const fetcher = async (url: RequestInfo | URL) =>
    fetch(url).then((res) => res.json());
  const { data, error } = useSWR(UIDB_URL, fetcher);

  if (isTable) {
    return (
      <div className="grid mt-6 mx-14">
        <ProductTable />
      </div>
    );
  }
  return (
    <>
      <div className="grid grid-cols-5 gap-5 mt-6 mx-14">
        {data &&
          data.devices.map((device) => (
            <ProductCard key={device.id} name={device.product.name} />
          ))}
      </div>
    </>
  );
}

export default ProductLayout;
