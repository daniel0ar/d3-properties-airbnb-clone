import { useAppStore } from "airbnb/store/store";
import React from "react";

const Description = () => {
  const { description, setDescription } = useAppStore();

  return (
    <div className="flex items-center justify-center h-full text-d3prop-light-black">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-4xl">
            Give your place a description
          </h2>
          <p>
            Share what makes your place special. Add details and be concise.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <textarea className="border border-gray-400 h-40 w-[550px] rounded-lg active:border-gray-950 p-6 no-scrollbar text-xl"
            value={description}
            onChange={(e) => {
              if (e.target.value.length <= 500) {
                setDescription(e.target.value);
              }
            }}></textarea>
          <span>{description.length}/500</span>
        </div>
      </div>
    </div>
  );
};

export default Description;
