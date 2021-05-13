import React, { useState, useEffect } from "react";
import { Maincontent } from "./component/Maincontent";
import { Sidebar } from "./component/Sidebar";
import Loader from "react-loader-spinner";

import "./App.css";

const App = () => {
    const [spaceData, setSpaceData] = useState([]);
    const [yearFilter] = useState([
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
    const [selectedYear, setSelectedYear] = useState(null);
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        fetch(`https://api.spacexdata.com/v3/launches?limit=20`)
            .then((res) => res.json())
            .then((data) => {
                setIsLoading(false)
                setSpaceData(data);
            }).catch(() => {
                setIsLoading(false)
            })
    }, []);

    useEffect(() => {
        console.log("selectedyear", selectedYear);
        setIsLoading(true)
        if (selectedYear !== null) {
            fetch(
                `https://api.spacexdata.com/v3/launches?limit=20&launch_year=${selectedYear}`
            )
                .then((res) => res.json())
                .then((data) => {
                    setIsLoading(false)
                    setSpaceData(data);
                }).catch(() => {
                    setIsLoading(false)
                })
        }
    }, [selectedYear]);

    useEffect(() => {
        console.log('spacedata', spaceData)
    }, [spaceData])

    const handleYear = (year) => {
        setSelectedYear(year);
    };

    return (
        <>

            {isLoading && <div className="loader">
                <Loader
                    type="Puff"
                    color="#00BFFF"
                    height={100}
                    width={100}
                />
            </div>
            }
            <div className="grid grid-cols-5 m-10 ">

                <p className="text-5xl col-span-5 -mt-5">SpaceX Launch Programs</p>
                <Sidebar data={yearFilter} handleYear={handleYear} />
                <Maincontent data={spaceData} />
            </div>
        </>
    );
};

export default App;
