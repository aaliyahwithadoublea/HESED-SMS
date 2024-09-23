import React from "react";
import img1 from "../assets/img1.webp";
import img2 from "../assets/img2.webp";
import img3 from "../assets/img3.webp";
import img4 from "../assets/img4.webp";
import img5 from "../assets/img5.webp";
import img6 from "../assets/img6.webp";

const ChooseHESED = () => {
  return (
    <div className="bg-gray-100 py-8">
      <div className="text-center mt-4">
        <h6 className="font-bold text-2xl md:text-3xl">Why Choose HESED PQ?</h6>
      </div>

      <div className="p-4 md:p-8 flex flex-col md:flex-row items-center md:items-start justify-between space-y-6 md:space-y-0">
        {/* Left Side Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={img1}
            alt="Efficient Result Management System"
            className="rounded-md w-full md:w-4/5"
          />
        </div>

        {/* Right Side Content */}
        <div className="md:w-1/2 md:ml-8 flex flex-col space-y-1">
          {/* First Item */}
          <div className="flex flex-col md:flex-row items-start gap-4">
            <img
              src={img2}
              alt="Extensive Question Bank"
              className="w-24 md:w-32 h-auto"
            />
            <div>
              <h4 className="text-lg md:text-xl font-bold text-blue-700">
                Extensive Question Bank
              </h4>
              <p className="text-gray-600">
                Access a vast library of past questions for IGCSE, JAMB, and
                SSCE exams.
              </p>
            </div>
          </div>

          <hr className="border-b-2 border-gray-300" />

          {/* Second Item */}
          <div className="flex flex-col md:flex-row items-start gap-4">
            <img
              src={img3}
              alt="Detailed Explanation"
              className="w-24 md:w-32 h-auto"
            />
            <div>
              <h4 className="text-lg md:text-xl font-bold text-blue-700">
                Detailed Explanation
              </h4>
              <p className="text-gray-600">
                Understand the reasoning behind each answer with in-depth
                solutions.
              </p>
            </div>
          </div>

          <hr className="border-b-2 border-gray-300" />

          {/* Third Item */}
          <div className="flex flex-col md:flex-row items-start gap-4">
            <img
              src={img4}
              alt="Personalized Practice"
              className="w-24 md:w-32 h-auto"
            />
            <div>
              <h4 className="text-lg md:text-xl font-bold text-blue-700">
                Personalized Practice
              </h4>
              <p className="text-gray-600">
                Tailor your study sessions with customizable quizzes based on
                subjects or topics.
              </p>
            </div>
          </div>

          <hr className="border-b-2 border-gray-300" />

          {/* Fourth Item */}
          <div className="flex flex-col md:flex-row items-start gap-4">
            <img
              src={img5}
              alt="Performance Tracking"
              className="w-24 md:w-32 h-auto"
            />
            <div>
              <h4 className="text-lg md:text-xl font-bold text-blue-700">
                Performance Tracking
              </h4>
              <p className="text-gray-600">
                Monitor your progress and focus on areas that need improvement.
              </p>
            </div>
          </div>

          <hr className="border-b-2 border-gray-300" />

          {/* Fifth Item */}
          <div className="flex flex-col md:flex-row items-start gap-4">
            <img
              src={img6}
              alt="Comprehensive Past Questions"
              className="w-24 md:w-32 h-auto"
            />
            <div>
              <h4 className="text-lg md:text-xl font-bold text-blue-700">
                Comprehensive Past Questions
              </h4>
              <p className="text-gray-600">
                Access a wide range of past questions across various subjects to
                ensure thorough preparation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseHESED;
