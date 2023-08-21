import React from "react";

function ProductTable() {
  let devices = 123;

  return (
    <table className="table-auto">
      <colgroup>
        <col span={1} className=""></col>
        <col span={1} className=""></col>
        <col span={1} className="w-2/3"></col>
      </colgroup>
      <thead className="text-left uppercase">
        <tr>
          <th>{devices}</th>
          <th>Product Line</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <img
              alt="poip"
              src="https://static.ui.com/fingerprint/ui/icons/0b6d0790-dea7-47a0-a1a6-929b85b0f247_25x25.png"
            ></img>
          </td>
          <td>airMAX</td>
          <td>airCube ISP</td>
        </tr>
        <tr>
          <td>Witchy Woman</td>
          <td>The Eagles</td>
          <td>1972</td>
        </tr>
        <tr>
          <td>Shining Star</td>
          <td>
            Earth, Wind, and Fire Earth, Wind, and Fire Earth, Wind, and Fire
            Earth, Wind, and Fire
          </td>
          <td>1975</td>
        </tr>
      </tbody>
    </table>
  );
}

export default ProductTable;
