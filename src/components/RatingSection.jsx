import React from "react";
import ratings from "../assets/ratings.webp";
import pics from "../assets/pics.webp";

const RatingSection = () => {
  return (
    <section
      className="text-white py-2 px-12 text-center mb-3 mx-auto"
      style={{ backgroundColor: "#3070B6" }}
    >
      <div className="flex flex-col md:flex-row justify-center items-center gap-5">
        <div className="flex gap-4 items-center" >
          <img src={pics} className="h-9" alt="Pics" />
          <div className="flex flex-col text-left">
            <img src={ratings} className="h-5 w-auto" alt="Ratings" />
            <p className="text-sm mb-2">
              Trusted by more than 100+ Schools, Teachers, and Parents
            </p>
          </div>
        </div>

        <div className="mt-1 md:mt-0" style={{marginLeft:"1rem"}}>
        <button className="bg-blue text-white-500 px-6 py-2 rounded-full border border-white">Read Reviews</button>
        </div>
      </div>
    </section>
  );
};

export default RatingSection;
