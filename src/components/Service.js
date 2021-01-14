import React from "react";
import Sdata from "./Sdata";
import Video from "./Video";
function Service() {
  return (
    <>
      <div className="my-2">
        <h1 className="text-center">Our Services</h1>
      </div>
        <div className="container-fluid nav_bg ">
         <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {Sdata.map((val, ind) => {
                return <Video description={val.description} title={val.title} thumbnail={val.imgsrc} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
