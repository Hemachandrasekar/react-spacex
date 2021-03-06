import React from "react";
import { Card } from "./Card";

const Maincontent = (props) => {
    return (
        <div className="col-span-4 pt-10 grid grid-cols-4  sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4  xl:grid-cols-4 gap-5">
            {props.data &&
                props.data.map((item, index) => {
                    return (
                        <Card
                            title={item.mission_name}
                            flightno={item.flight_number}
                            detail={item.details}
                            image={item.links.mission_patch_small}
                            missionid={item.mission_id}
                            launchyear={item.launch_year}
                            successlaunch={item.launch_success}
                            successlanding={item.launch_success2}
                        />
                    );
                })}
        </div>
    );
};
export { Maincontent };
