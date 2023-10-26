import React from "react";

const StepThreeStarter = () => {
  return (
    <div className="flex items-center h-full mx-20">
      <div className="grid grid-cols-2 gap-10 items-center">
        <div className="flex flex-col gap-4 text-d3prop-light-black">
          <div className="text-2xl">Step 3</div>
          <h1 className="text-4xl">
            <strong>Finish up and publish</strong>
          </h1>
          <p className="text-xl">
            Laboris nostrud in ad velit occaecat labore cillum minim proident laboris. Esse culpa deserunt culpa ut qui elit labore amet irure non.
          </p>
        </div>
        <div>
          <video src="/home3.mp4" autoPlay loop controls={false}></video>
        </div>
      </div>
    </div>
  );
};

export default StepThreeStarter;
