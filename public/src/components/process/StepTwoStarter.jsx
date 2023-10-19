import React from "react";

const StepTwoStarter = () => {
  return (
    <div className="flex items-center h-full mx-20">
      <div className="grid grid-cols-2 gap-10 items-center">
        <div className="flex flex-col gap-4 text-d3prop-light-black">
          <div className="text-2xl">Step 2 </div>
          <h1 className="text-4xl">
            <strong>Make your place stand out</strong>
          </h1>
          <p className="text-xl">
            Excepteur consectetur aute adipisicing consequat nulla laborum. 
            Exercitation labore aliqua cillum id sint qui exercitation occaecat
             ex aliquip ad. Est nostrud amet eu ullamco esse. Velit dolor esse 
             laboris sit non ex. Est aliquip elit esse ullamco.
          </p>
        </div>
        <div>
          <video src="/home2.mp4" autoPlay loop controls={false}></video>
        </div>
      </div>
    </div>
  );
};

export default StepTwoStarter;
