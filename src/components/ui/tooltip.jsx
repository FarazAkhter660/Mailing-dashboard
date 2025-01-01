import React from "react";

const Tooltip = ({ text, children }) => (
  <div className="relative group inline-flex items-center">
    {children}
    <div className="absolute hidden group-hover:flex items-center justify-center bg-gray-700 text-white text-xs rounded px-2 py-1 whitespace-nowrap transition-opacity duration-200 shadow-lg z-10 top-full left-1/2 transform -translate-x-1/2 mt-1">
      {text}
    </div>
  </div>
);

export default Tooltip;
