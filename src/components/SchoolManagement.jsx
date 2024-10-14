import React from "react";
import laptop from "../assets/laptop.png"; // Update with the correct path to your image
import backgroundImage from "../assets/Blue-bg.png"; // Update with the path to your background image

const SchoolManagementComponent = () => {
  return (
    <div
      className="flex items-center justify-center min-h-screen"
      style={{
        backgroundColor: "#F3F4F6",
        paddingTop: "4rem",
        paddingBottom: "4rem",
      }}
    >
      <div
        className="flex flex-col md:flex-row items-center justify-between  rounded-lg shadow-lg bg-cover bg-center w-full max-w-5xl"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          minHeight: "400px",
          borderRadius: "3rem",
          width: "70rem",
          paddingLeft: "2rem",
          overflow: "hidden",
        }}
      >
        {/* Left Side: Text and Buttons */}
        <div className="text-white w-full md:w-1/2 mb-6 md:mb-0 p-4">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            One stop for all your School management solutions.
          </h1>
          <p className="text-sm md:text-base mb-4">
            Request a demo and experience firsthand how HESED Edusuite will
            transform your school’s management.
          </p>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <button className="bg-black text-white px-7 py-2 rounded-lg shadow transition-all duration-300 transform hover:bg-blue-600 hover:scale-105">
              Contact Us
            </button>
            <button className="bg-none text-white px-4 py-2 rounded-lg shadow border-2 border-white transition-all duration-300 transform hover:bg-white hover:text-black hover:scale-105">
              Request Demo Now
            </button>
          </div>
        </div>

        {/* Right Side: Image */}
        <div
          className="w-full md:w-1/2 flex justify-center"
          style={{ overflow: "hidden" }}
        >
          <img
            src={laptop}
            alt="School Management"
            className="max-w-full h-auto"
            style={{ overflow: "hidden", paddingLeft: "3rem" }}
          />
        </div>
      </div>
    </div>
  );
};

export default SchoolManagementComponent;
