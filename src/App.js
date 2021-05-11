import React, { useState, useEffect } from "react";
import { Maincontent } from "./component/Maincontent";
import { Sidebar } from "./component/Sidebar";

import "./App.css";

const App = () => {
  const [spaceData, setSpaceData] = useState();
  const [yearFilter] = useState([
    2005,
    2006,
    2007,
    2008,
    2009,
    2010,
    2011,
    2012,
    2013,
    2014,
    2015,
    2016,
    2017,
    2018,
    2019,
    2020,
    2021,
  ]);
  useEffect(() => {
    fetch(`https://api.spacexdata.com/v3/launches?limit=100`)
      .then((res) => res.json())
      .then((data) => {
        setSpaceData(data);
        // setYearFilter(data.launch_year);
      });
  }, []);
  useEffect(() => {}, [spaceData]);
  // const handleYear = () => {
  //   setYearFilter(() => {
  //     spaceData&&spaceData.map((item, index) => {
  //       return item.launch_year;
  //     });
  //   });
  //   // const myArray = [1, 2, 3, 1, 5, 8, 1, 2, 9, 4];
  //   // const unique = [...new Set(myArray)]; // [1, 2, 3, 5, 8, 9, 4]
  //   // console.log("unqiue value", unique);
  //   // console.log("fetch yearfilter", yearFilter);
  // };
  return (
    <div className="grid grid-cols-4">
      <Sidebar data={yearFilter} />
      <Maincontent data={spaceData} />
    </div>
    // <div class="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
    //   <div class="flex justify-center md:justify-end -mt-16">
    //     <img
    //       alt=""
    //       class="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
    //       src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
    //     />
    //   </div>
    //   <div>
    //     <h2 class="text-gray-800 text-3xl font-semibold">Design Tools</h2>
    //     <p class="mt-2 text-gray-600">
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores
    //       deserunt ea doloremque natus error, rerum quas odio quaerat nam ex
    //       commodi hic, suscipit in a veritatis pariatur minus consequuntur!
    //     </p>
    //   </div>
    //   <div class="flex justify-end mt-4">
    //     <a href="http://google.com" class="text-xl font-medium text-indigo-500">
    //       John Doe
    //     </a>
    //   </div>
    // </div>
  );
};

export default App;
