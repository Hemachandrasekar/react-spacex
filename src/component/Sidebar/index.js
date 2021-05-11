import React from "react";

const Sidebar = ({ data,handleYear }) => {
  return (
    <div className="mt-5">
      <p className="text-2xl">Filter</p>
      <p className="text-center underline text-2xl py-5">Launch Year</p>
      {data.map((item, index) => {
        return (
          <button
            onClick={() => {
              handleYear(item);
            }}
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-5 my-1 rounded"
          >
            {item}
          </button>
        );
      })}

      <p className="text-center underline text-2xl py-5">Succcessfull Launch</p>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-5 my-1 rounded">
        True
      </button>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-5 my-1 rounded">
        False
      </button>
      <p className="text-center underline text-2xl py-5">
        Succcessfull Landing
      </p>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-5 my-1 rounded">
        True
      </button>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-5 my-1 rounded">
        False
      </button>
    </div>
  );
};
export { Sidebar };
