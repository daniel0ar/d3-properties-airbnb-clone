import React from "react";
import { BsFillMapFill } from "react-icons/bs";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { useAppStore } from "airbnb/store/store";

const ViewSwitchBadge = () => {
  const { isMapView, setIsMapView } = useAppStore();

  return (
    <div
      className="fixed z-10 flex justify-center items-center bottom-24 left-0 right-0 cursor-pointer"
      onClick={() => setIsMapView()}
    >
      <div className="bg-black p-4 text-white rounded-full">
        <div className="flex items-center gap-2 text-sm">
          {!isMapView ? (
            <>
              Show Map <BsFillMapFill></BsFillMapFill>
            </>
          ) : (
            <>
              Show List <AiOutlineUnorderedList></AiOutlineUnorderedList>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewSwitchBadge;
