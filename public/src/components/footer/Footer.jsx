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
    <footer className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6">
      <ul className="flex gap-3 px-4 py-5 text-sm md:font-normal">
        <span className="text-sm text-gray-500 sm:text-center">&copy; 2023 D3Properties</span>
        {renderedLinks}
      </ul>
      <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500sm:mt-0 px-5 pb-5">
        <li className="flex items-center gap-2 cursor-pointer">
          <FiGlobe></FiGlobe>English
        </li>
        <li className="hover:underline me-4 md:me-6">$ USD</li>
        <li className="flex items-center hover:underline me-4 md:me-6">Support & Resources <PiCaretUpBold></PiCaretUpBold></li>
      </ul>
    </footer>
  );
}
