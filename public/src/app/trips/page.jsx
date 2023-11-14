"use client";
import Footer from "airbnb/components/footer/Footer";
import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("airbnb/components/navbar/Navbar"), {
  ssr: false,
});
import { getUserTrips } from "airbnb/lib/lisitng";
import { useAppStore } from "airbnb/store/store";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
  const router = useRouter();
  const { userInfo } = useAppStore();
  const [tripInfo, setTripData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await getUserTrips(userInfo?.id);
      setTripData(data);
      console.log("Data is: ", data);
    };
    if (userInfo){
      getData();
    };
  }, []);

  function checkDateStatus(inputDate) {
    const currentDate = new Date();
    const providedDate = new Date(inputDate);

    if (providedDate < currentDate) return "Completed";
    else if (providedDate > currentDate) return "Up Next";
    else return "Today!";
  }

  return (
    <div>
      <Navbar></Navbar>
      <div className="h-[82.5vh] flex justify-start items-start">
        <div className="relative overflow-x-auto shadow-lg w-full m-20">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-200">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Listing Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Check in Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Check out Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Trip Status
                </th>
              </tr>
            </thead>
            <tbody>
              {tripInfo.map((trip, index) => (
                <tr key={index} className="bg-white border-b hover:bg-gray-100">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap cursor-pointer"
                    onClick={() => router.push(`/listing/${trip.listing.id}`)}
                  >
                    {trip.listing.title}
                  </th>
                  <td className="px-6 py-4">{trip.tripInfo.startDate}</td>
                  <td className="px-6 py-4">{trip.tripInfo.endDate}</td>
                  <td className="px-6 py-4">{trip.tripInfo.price}</td>
                  <td className="px-6 py-4">
                    <span className={`${
                      checkDateStatus(trip.tripInfo.startDate) === "Completed"
                      ? "bg-green-500"
                      : "bg-d3prop-theme-color"
                    } text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded`}
                    >
                      {checkDateStatus(trip.tripInfo.startDate)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default page;
