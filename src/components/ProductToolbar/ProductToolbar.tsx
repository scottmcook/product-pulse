import React from "react";

function ProductToolbar() {
  return (
    <div className="flex justify-between border border-y-[#ededf0] px-7">
      <input className="background-color--light" placeholder="Search" />

      <div>
        <button>Toggle</button>
        <div>Filter</div>
      </div>
    </div>
  );
}

export default ProductToolbar;
