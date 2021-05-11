import React from "react";

const Card = ({
  title,
  image,
  detail,
  flightno,
  missionid,
  launchyear,
  successlaunch,
  successlanding,
}) => {
  // console.log("title", props);

  return (
    <div className="rounded overflow-hidden shadow-lg">
      <img className="w-full p-3" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          {title}
          <span className="px-2"> #{flightno}</span>
        </div>
        {/* <p className="text-gray-700 text-base">{detail}</p> */}
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Mission Id : {missionid.length ? missionid[0] : "NA"}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Launch Year: {launchyear}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Successlaunch : {successlaunch ? "true" : "false"}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Success Landing : {successlanding ? "true" : "false"}
        </span>
      </div>
    </div>
  );
};
export { Card };
