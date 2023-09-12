import Link from "next/link";
import React from "react";
import { FiGlobe } from "react-icons/fi";
import { PiCaretUpBold } from "react-icons/pi";

export default function Footer() {
  
  const links = ["privacy", "terms", "sitemap", "company", "destinations"];

  const renderedLinks = links.map((link) => {
    return <li key={link}><Link href='#' className="capitalize">{link}</Link></li>
  })

  return (
    <div className="px-20 border-t border-t-gray-200 py-4 flex justify-between w-full text-sm z-50 bg-white items-center">
      <ul className="flex gap-3 font-normal">
        <li>&copy; 2023 D3Properties</li>
        {renderedLinks}
      </ul>
      <ul className="flex gap-4 font-medium">
        <li className="flex items-center gap-2 cursor-pointer">
          <FiGlobe></FiGlobe>English
        </li>
        <li className="cursor-pointer">$ USD</li>
        <li className="flex items-center gap-2 cursor-pointer">Support & Resources <PiCaretUpBold></PiCaretUpBold></li>
      </ul>
    </div>
  );
}
