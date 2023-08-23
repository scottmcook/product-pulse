"use client";
import React from "react";
import { useState } from "react";
import ProductToolbar from "../ProductToolbar/ProductToolbar";
import ProductCard from "../ProductCard/ProductCard";
import ProductTable from "../ProductTable/ProductTable";

// Data fetching
import useSWR from "swr";

function ProductLayout() {
  const [isTable, setLayout] = useState(false);
  const UIDB_URL = "https://static.ui.com/fingerprint/ui/public.json";
  const UIDB_IMAGE_URL = "https://static.ui.com/fingerprint/ui/icons";
  const fetcher = async (url: RequestInfo | URL) =>
    fetch(url).then((res) => res.json());

  const handleGridToggle = () => {
    setLayout(false);
  };

  const handleTableToggle = () => {
    setLayout(true);
  };

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
      <div className="flex justify-between border border-y-[#ededf0] px-7">
        <input className="background-color--light" placeholder="Search" />

        <div>
          <button onClick={handleGridToggle}>Toggle Grid</button>
          <button onClick={handleTableToggle}>Toggle Table</button>
          <div>Filter</div>
        </div>
      </div>

      {!isTable ? (
        <div className="grid grid-cols-5 gap-5 mt-6 mx-14">
          {data &&
            data.devices.map(
              (device: {
                id: React.Key | null | undefined;
                product: { name: string };
                line: { name: string };
                icon: { resolutions: number[]; id: string };
              }) => (
                <>
                  <ProductCard
                    key={device.id}
                    name={device.product.name}
                    productType={device.line.name}
                    imageUrl={`${UIDB_IMAGE_URL}/${device.icon.id}_257x257.png`}
                  />
                </>
              )
            )}
        </div>
      ) : (
        <div className="grid mt-6 mx-28 text-neutral-600">
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
              {data &&
                data.devices.map(
                  (device: {
                    id: React.Key | null | undefined;
                    product: { name: string };
                    line: { name: string };
                    icon: { resolutions: number[]; id: string };
                  }) => (
                    <>
                      <ProductTable
                        key={device.id}
                        name={device.product.name}
                        productLine={device.line.name}
                        imageUrl={`${UIDB_IMAGE_URL}/${device.icon.id}_25x25.png`}
                      />
                    </>
                  )
                )}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

export default ProductLayout;
