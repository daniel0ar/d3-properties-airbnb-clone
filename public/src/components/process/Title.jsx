import { useAppStore } from "airbnb/store/store";
import React from "react";

const Title = () => {

  const { title, setTitle } = useAppStore();

  return (
    <div className="flex flex-col gap-5 items-center justify-center h-full text-d3prop-light-black">
      <div className="flex flex-col gap-2">
        <h2 className="font-semibold text-4xl">
          Now, let's give your property a title
        </h2>
        <p>
          Short titles work best. Be playful, you can always change it later.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <textarea className="border border-gray-400 h-40 w-[550px] rounded-lg active:border-gray-950 p-6 no-scrollbar text-4xl"
        value={title}
        onChange={(e) => {
          if (e.target.value.length <= 32){
            setTitle(e.target.value);
          }
        }}></textarea>
        <span>{title.length}/32</span>
      </div>
    </div>
  );
};

export default Title;
