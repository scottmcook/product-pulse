import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import ProductTable from "../ProductTable/ProductTable";

// Data fetching
import useSWR from "swr";

const UIDB_URL = "https://static.ui.com/fingerprint/ui/public.json";
const fetcher = (UIDB_URL) => fetch(UIDB_URL).then((res) => res.json());

function ProductLayout() {
  let isTable = false;
  const { data, isLoading, isError } = useProducts();

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
        <ProductCard name={"PlaceholderProductCard"} />
      </div>
    </>
  );
}

export default ProductLayout;
