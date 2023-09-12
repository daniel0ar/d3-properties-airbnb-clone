import React from "react";

const ContextMenu = ({ options, cordinates, contextMenu, setContextMenu }) => {
  
  const contextMenuRef = useRef(null);

  const renderedOptions = options.map( (name, callback) => {
    return <li key={name} className="hover:bg-gray-100 pl-5 pr-10 py-2 cursor-pointer"><span>{name}</span></li>
  });
  
  return (
    <div ref={contextMenu}
      style={{boxShadow: "0 2px 5px 0 rgba(var(11,20,26),.26),0 2px 10px 0 rgba(11,20,26;),.16)", top: cordinates.y, left: cordinates.x}}
      className="bg-white shadow-2xl fixed py-5 z-[100] rounded-lg border border-gray-200">
      <ul>

      </ul>
    </div>
  );
};

export default ContextMenu;
