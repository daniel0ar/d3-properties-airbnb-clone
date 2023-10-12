import React from "react";

const StepOneStarter = () => {
  return <div className="flex items-center h-full mx-20">
    <div className="grid grid-cols-2 gap-10 items-center">
      <div className="flex flex-col gap-4 text-d3prop-light-black">
        <div className="text-2xl">Step 1 </div>
        <h1 className="text-4xl">
          <strong>Tell us about yourself</strong>
        </h1>
        <p className="text-xl">Duis nostrud deserunt occaecat qui culpa ut tempor esse ea id. Fugiat eu mollit cupidatat adipisicing consequat anim minim aute anim dolore. Nulla exercitation cillum sint Lorem incididunt occaecat voluptate ullamco consequat adipisicing ut laboris elit dolor</p>
      </div>
      <div>
        <video src="/home.mp4" autoPlay loop controls={false}></video>
      </div>
    </div>
  </div>;
};

export default StepOneStarter;
