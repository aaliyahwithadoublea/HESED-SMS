import React from "react";
import hero from "../assets/hero-photo.png";

const HeroSection = () => {
  return (
    <section
      className="bg-gray-50 text-center py-4 px-4"
    >
      <h1 className="text-3xl font-bold mb-4">
        Enjoy Seamless School Management with HESED EdSuite
      </h1>
      <p className="text-gray-600 mb-8">
        We simplify administrative tasks and learning challenges with our
        intuitive, all-in-one School Management System and innovative EdTech
        solutions.
      </p>
      <div className="space-x-4">
        <button
          style={{backgroundColor: "#3070B6"}}
          className="text-white px-6 py-3 rounded-full"
        >
          Get started for free
        </button>

        <button className="bg-gray-100 text-blue-500 px-6 py-3 rounded-full">
          See how it works
        </button>
      </div>
      {/* Centering and resizing the image */}
      <img src={hero} alt="Dashboard" className="mt-8 mx-auto w-1/2 h-auto" />
    </section>
  );
};

export default HeroSection;
