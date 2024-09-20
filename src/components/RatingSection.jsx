import React from "react";
import ratings from "../assets/ratings.png";
import pics from "../assets/pics.png";

const RatingSection = () => {
  return (
    <section className=" text-white py-2 px-12 text-center mb-3 m-0 auto "  style={{backgroundColor: "#3070B6"}}>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "5rem" }}>
            <div style={{display:"flex", gap:"2rem"}} >
      <img src={pics} className="h-9" />
      <div style={{display:"flex", flexDirection:"column"}}>
      <img src={ratings} className="h-5 w-auto" />
      <p className="text-x mb-2">
        Trusted by more than 100+ Schools, Teachers and Parents
      </p>
      </div>
      </div>

      <div>
      {/* <p className="text-lg font-bold mb-4">4.8/5 Ratings</p> */}
      <button className="bg-blue text-white-500 px-6 py-2 rounded-full border border-white">Read Reviews</button>
      </div>
      </div>
    </section>
  );
};

export default RatingSection;
