import React from "react";
import maps from "../assets/maps.png";
import phone from "../assets/phone.png";
import mailing from "../assets/mailing.png";
import line from "../assets/line.png";

const Location = () => {
  return (
    <div style={{ backgroundColor: "#E8EBF0", padding: "2.5rem" }}>
      <h2 className="text-3xl font-bold text-center mb-6">
        Checkout our different locations. Feel <br /> free to contact Us.
      </h2>
      <div className="flex flex-col md:flex-row justify-center md:justify-evenly">
        {/* UK Location */}
        <div className="flex flex-col items-start mb-4 md:mb-0">
          <div className="flex items-center gap-2">
            <img src={maps} alt="Map Icon" style={{ height: "1.3rem" }} />
            <p className="text-left">
              United Kingdom <br />
              The Mile | 1000 Great West Road, Brentford, <br />
              Middlesex, London, TW8 9DW, UK.
            </p>
          </div>

          <div className="flex items-center gap-2 mt-2">
            <img src={phone} alt="Phone Icon" style={{ height: "1.3rem" }} />
            <p>+44 (0) 203 6575 696</p>
          </div>
        </div>

        {/* Vertical Line Separator */}
        <div className="hidden md:flex">
          <img src={line} alt="Line Separator" style={{ height: "8rem" }} />
        </div>

        {/* Nigeria Location */}
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-2">
            <img src={maps} alt="Map Icon" style={{ height: "1.3rem" }} />
            <p className="text-left">
              Nigeria <br />
              7th Floor, Mulliner Towers, <br />
              39 Alfred Rewane Road, Ikoyi, Lagos
            </p>
          </div>

          <div className="flex items-center gap-2 mt-2">
            <img src={phone} alt="Phone Icon" style={{ height: "1.3rem" }} />
            <p>+234 (0)913 488 8000</p>
          </div>

          <div className="flex items-center gap-2 mt-2">
            <img src={mailing} alt="Mail Icon" style={{ height: "1.3rem" }} />
            <p>Info@hesedlearning.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
