import React from "react";
import hero from "../assets/hero-photo.webp";
import play from "../assets/play.webp";

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
      <div className="flex items-center space-x-4" style={{margin:"0 aut0", justifyContent:"center"}} >
        <button
          style={{backgroundColor: "#3070B6"}}
          className="text-white px-6 py-3 rounded-full"
        >
          Get started for free
        </button>

        <button className=" text-blue-500 px-6 py-3 rounded-full" style={{border:"2px solid grey",display:"flex",alignItems:"center"}}>   <img
            src={play}
            style={{ height: "1rem", marginRight: "0.5rem", display:"flex",alignItems:"center" }}
            alt="Play Icon"
          />
        See how it works
        </button>
        
      </div>
      {/* Centering and resizing the image */}
      <img src={hero} alt="Dashboard" className="mt-8 mx-auto w-1/2 h-auto" />
    </section>
  );
};

export default HeroSection;


