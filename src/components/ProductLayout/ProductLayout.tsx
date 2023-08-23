// Utilities
"use client";
import React from "react";
import { useState } from "react";

// Data fetching
import useSWR from "swr";

// UI Components
import ProductToolbar from "../ProductToolbar/ProductToolbar";
import ProductCard from "../ProductCard/ProductCard";
import ProductTable from "../ProductTable/ProductTable";
import Image from "next/image";

// Images
import ListViewLogo from "../../icons/list-view.png";
import ListViewLogoActive from "../../icons/list-view-active.png";
import GridViewLogo from "../../icons/grid-view.png";
import GridViewLogoActive from "../../icons/grid-view-active.png";

function ProductLayout() {
  const [isTable, setLayout] = useState(false);
  const UIDB_URL = "https://static.ui.com/fingerprint/ui/public.json";
  const UIDB_IMAGE_URL = "https://static.ui.com/fingerprint/ui/icons";
  const fetcher = async (url: RequestInfo | URL) =>
    fetch(url).then((res) => res.json());

  let handleGridLogo = !isTable ? GridViewLogoActive : GridViewLogo;
  let handleListLogo = isTable ? ListViewLogoActive : ListViewLogo;

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
        <input
          className="w-80 my-2 py-2 pl-3 rounded-md background-color--light"
          placeholder="Search"
        />

        <div className="flex items-center gap-x-5">
          <div>
            <Image
              alt="list view icon"
              className={`${
                isTable ? "background-color--light" : ""
              } cursor-pointer`}
              width={20}
              height={20}
              src={handleListLogo}
              onClick={handleTableToggle}
            />
          </div>
          <div>
            <Image
              alt="grid view icon"
              className={`${
                !isTable ? "background-color--light" : ""
              } cursor-pointer`}
              width={20}
              height={20}
              src={handleGridLogo}
              onClick={handleGridToggle}
            />
          </div>

          <div>Filter</div>
        </div>
      </div>

      {!isTable ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-6 mx-14">
            {data &&
              data.devices.map(
                (device: {
                  id: React.Key | null | undefined;
                  product: { name: string };
                  line: { name: string };
                  icon: { resolutions: number[]; id: string };
                }) => (
                  <ProductCard
                    key={device.id}
                    name={device.product.name}
                    productType={device.line.name}
                    imageUrl={`${UIDB_IMAGE_URL}/${device.icon.id}_257x257.png`}
                  />
                )
              )}
          </div>
        </>
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
                <th></th>
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
