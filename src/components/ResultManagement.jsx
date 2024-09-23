import React from 'react';
import frame1 from '../assets/frame1.webp'

const ResultManagement = () => {
  return (
    <div style={{backgroundColor: "#E8EBF0"}}>
           <div style={{margin:"0 auto", marginTop:"-1rem", paddingTop:"2rem"}}>
        <h6 style={{textAlign:"center", fontWeight:"bold", fontSize:"2rem"}}>
        Discover HESED EdSuite's range of <br/> EdTech solutions
        </h6>

        <h2 style={{textAlign:"center"}}>Our HESED SMS provides schools with comprehensive tools to enhance academic performance and streamline management for parents, teachers, students, administrators, and school owners. Designed to improve efficiency, communication, and learning outcomes, 
        our key solutions include:</h2>

            </div>
    <br/>
   
    <div className=" p-8 rounded-lg shadow-lg mb-10 flex flex-col md:flex-row" >

      <div className="md:w-1/2 flex justify-center">
        <img 
          src={frame1} 
          alt="Efficient Result Management System" 
          className="rounded-md"
        />
      </div>
      <div className="md:w-1/2 md:ml-8 mt-4 md:mt-0">
        <h2 className="text-2xl font-bold mb-4" style={{color:"#3070B6"}}>Efficient Result Management System</h2>
        <p className="text-gray-600 mb-4">
        Boost your school’s efficiency and academic productivity with our advanced Result Management System.
        </p>
        <p className="text-gray-600 mb-4">
        This solution automates the grading process, from result generation to detailed data visualization, making it an indispensable tool for teachers, administrators, and school management.
        </p>
        <p className="text-gray-600 mb-4">
        Say goodbye to time-consuming manual calculations. Our system instantly grades exams, handles complex scoring tasks, and eliminates the need for traditional paperwork.
        </p>
        <br/>
        <button><a href="#" style={{backgroundColor: "#3070B6"}}
          className="text-white px-6 py-3 rounded-full">Book a Free Demo →</a>
          </button>
      </div>
      </div>
    </div>
  );
};

export default ResultManagement;
