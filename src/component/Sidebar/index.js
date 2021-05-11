import React from "react";

const Sidebar = ({ data }) => {
  return (
    <div className="mt-50">
      {data.map((item, index) => {
        return (
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            {item}
          </button>
        );
      })}
    </div>
  );
};
export { Sidebar };
