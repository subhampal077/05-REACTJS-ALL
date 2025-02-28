import React from "react";

function Forecast({ title, data }) {
  // console.log(data);

  return (
    <>
      <div className="py-3">
        <p className="font-medium uppercase">{title}</p>
        <hr className="my-1" />
        <div className="flex items-center justify-between">
          {data.map((data, i) => {
            return (
              <div
                key={i}
                className="flex flex-col items-center justify-center"
              >
                <p className="text-sm font-light">{data.timeDay}</p>

                <img src={data.icon} alt="weather image" className="w-12" />

                <p className="font-medium">{data.temp}°</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Forecast;
