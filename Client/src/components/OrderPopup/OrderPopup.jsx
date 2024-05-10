import React from "react";
import { IoCloseOutline } from "react-icons/io5";

const OrderPopup = ({ orderPopup, setOrderPopup }) => {
  return (
    <>
      {orderPopup && (
        <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm flex justify-center items-center">
          <div className="p-4 shadow-lg bg-white dark:bg-gray-900 rounded-md duration-200 w-[300px]">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-xl font-semibold text-black/70">
                Login / Signup
              </h1>
              <IoCloseOutline
                className="text-2xl cursor-pointer"
                onClick={() => setOrderPopup(false)}
              />
            </div>
            {/* Body */}
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full rounded-md border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-2"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-md border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-2"
              />
              <input
                type="number"
                placeholder="Age"
                className="w-full rounded-md border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-2"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="w-full rounded-md border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
              />
              <div className="flex justify-center">
                <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full mr-2">
                  Login
                </button>
                <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full">
                  Signup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderPopup;
