import React from "react";
import { PaperClipIcon } from "@heroicons/react/20/solid";
import MovingComponent from "react-moving-text";
import Nav from "./Nav";

const Profile = () => {
  return (
    
    <>
{/* <Nav/> */}
      <div className="sm:px-40 md:px-45 lg:px-50 xl:px-55">
        {/* <div className="px-4 sm:px-0 ">
          <MovingComponent
            type="fadeInFromLeft"
            duration="1000ms"
            delay="0s"
            direction="normal"
            timing="ease"
            iteration="1"
            fillMode="none"
            className="tracking-wider text-bold text-white  bg-gray-800 rounded-lg inline-block px-3 py-1"
          >
            Profile Information
          </MovingComponent>
        </div> */}
        <div className="mt-6 border-t border-gray-100">
          <dl className="divide-y divide-gray-100">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-700">
                Full name
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-500 sm:col-span-2 sm:mt-0">
                Toufique Elahi Tonmoy
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-700">
                Designation
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-500 sm:col-span-2 sm:mt-0">
                IT Intern
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-700">
                Email address
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-500 sm:col-span-2 sm:mt-0">
                tonmoy@gmail.com
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-700">
                Branch
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-500 sm:col-span-2 sm:mt-0">
                Dhaka
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-700">
                Contact
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-500 sm:col-span-2 sm:mt-0">
                +880123456789
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </>
  );
};

export default Profile;
