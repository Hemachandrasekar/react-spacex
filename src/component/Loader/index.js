import React from "react";

const Loader = () => {
  return (
    <button type="button" className="bg-indigo-600 ..." disabled>
      <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
      Processing
    </button>
  );
};
export { Loader };
