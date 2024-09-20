import React from "react";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";

const ChooseHESED = () => {
  return (
    <div style={{ backgroundColor: "#E8EBF0" }}>
      <div style={{ margin: "0 auto", marginTop: "-1rem", paddingTop: "2rem" }}>
        <h6
          style={{ textAlign: "center", fontWeight: "bold", fontSize: "2rem" }}
        >
          Why choose HESESD PQ?
        </h6>
      </div>
      <br />

      <div className=" p-8 rounded-lg shadow-lg mb-10 flex flex-col md:flex-row">
        <div className="md:w-1/2 flex justify-center">
          <img
            src={img1}
            alt="Efficient Result Management System"
            className="rounded-md"
          />
        </div>


        <div className="md:w-1/2 md:ml-8 mt-4 md:mt-0" style={{ padding:"1rem",width:"28rem" }}>

        <div style={{display:"flex", gap:"2rem"}}> 
            <div >
                <img src={img2} style={{height:"6rem",width:"11rem"}}/>
            </div>

            <div>
          <h4 className="text-xl font-bold mb-4" style={{ color: "#3070B6" }}>
            Extensive Question Bank
          </h4>
          <p className="text-gray-600 mb-4">
            Access a vast library of past questions for IGCSE, JAMB, and SSCE
            exams.
          </p>
          </div>


        </div>

        < hr style={{borderBottom:"2px solid #C5CFDA"}}/>
        <br/>


           <div style={{display:"flex", gap:"2rem"}}> 
            <div >
                <img src={img3} style={{height:"6rem",width:"11rem"}}/>
            </div>

            <div>
          <h4 className="text-xl font-bold mb-4" style={{ color: "#3070B6" }}>
          Detailed Explanation
          </h4>
          <p className="text-gray-600 mb-4">
          Understand the reasoning behind each answer with in-depth solutions.
          </p>
          </div>


        </div>

        < hr style={{borderBottom:"2px solid #C5CFDA"}}/>
        <br/>

        <div style={{display:"flex", gap:"2rem"}}> 
            <div >
                <img src={img4} style={{height:"6rem",width:"12rem"}}/>
            </div>

            <div>
          <h4 className="text-xl font-bold mb-4" style={{ color: "#3070B6" }}>
          Personalized Practice
          </h4>
          <p className="text-gray-600 mb-4">
          Tailor your study sessions with customizable quizzes based on
          subjects or topics.
          </p>
          </div>


        </div>

        < hr style={{borderBottom:"2px solid #C5CFDA"}}/>
        <br/>

        <div style={{display:"flex", gap:"2rem"}}> 
            <div >
                <img src={img5} style={{height:"6rem",width:"10rem"}}/>
            </div>

            <div>
          <h4 className="text-xl font-bold mb-4" style={{ color: "#3070B6" }}>
          Performance Tracking
          </h4>
          <p className="text-gray-600 mb-4">
          Monitor your progress and focus on areas that need improvement.
          </p>
          </div>


        </div>
        
        < hr style={{borderBottom:"2px solid #C5CFDA"}}/>
        <br/>


           <div style={{display:"flex", gap:"2rem"}}> 
            <div >
                <img src={img6} style={{height:"6rem",width:"13rem"}}/>
            </div>

            <div>
          <h4 className="text-xl font-bold mb-4" style={{ color: "#3070B6" }}>
          Comprehensive Past Question
          </h4>
          <p className="text-gray-600 mb-4">
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
