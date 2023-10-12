import Image from "next/image";
import React from "react";

const Overview = () => {

  const mainTitle = "Listing has never been easier";
  const data = [
    {
      title: "Tell us about your place",
      description: "Share some basic info, such as where it is and how many guests can stay",
      image: "/overview1.webp"
    },
    {
      title: "Make it stand out",
      description: "Add 5 more photos plus a title and a description, we'll help you out",
      image: "/overview2.webp"
    },
    {
      title: "Finish up and publish",
      description: "Set a starting price and publish your listing",
      image: "/overview3.webp"
    },
  ];

  return (
    <div className="flex h-full justify-between items-center px-32 gap-20">
      <div>
        <strong>
          <h1 className="text-5xl leading-normal text-d3prop-light-black">{mainTitle}</h1>
        </strong>
      </div>
      <ul className="flex flex-col gap-16">
        {
          data.map(({ description, title, image }, index) => {
            return <li
              key={title}
              className="flex items-center justify-start gap-6">
              <strong className="text-2xl pt-5 text-d3prop-light-black">
                <h3>{index + 1}</h3>
              </strong>
              <div className="pt-5">
                <strong className="text-2xl text-d3prop-light-black">
                  <h3>{title}</h3>

                </strong>
                <p className="text-d3prop-light-gray">{description}</p>
              </div>
              <div className="relative w-48 h-32">
                <Image src={image} alt="overview" fill className="object-contain w-[100%] relative"></Image>
              </div>
            </li>
          })
        }
      </ul>
    </div>
  );
};

export default Overview;
