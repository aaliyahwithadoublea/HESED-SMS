import React from 'react';
import frame2 from '../assets/frame2.webp'
const ComprehensiveStaff = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg mb-8 flex flex-col md:flex-row">
      <div className="md:w-1/2 flex justify-center">
        <img 
          src={frame2} 
          alt="Advanced Financial Management" 
          className="rounded-md"
        />
      </div>
      <div className="md:w-1/2 md:ml-8 mt-4 md:mt-0">
        <h2 className="text-2xl font-bold mb-4" style={{color:"#3070B6"}}>Comprehensive Staff & Student Management System</h2>
        <p className="text-gray-600 mb-4">
        Our platform provides a user-friendly solution for managing staff and student information, designed to save time and increase productivity for your school.
        </p>
        <p className="text-gray-600 mb-4">
        Our system allows administrators to easily track staff attendance, monitor performance, and manage leave requests with just a few clicks. Automating these processes helps to reduce paperwork and improve efficiency across your organization.
        </p>
        <p className="text-gray-600 mb-4">
        Say goodbye to tedious manual record-keeping with our automated student management system. Teachers, administrators, and parents can easily access and manage key student data, create class schedules, and track academic performance in real-time.  Built-in security features guarantee that all transactions are encrypted, giving peace of mind to both your institution and its stakeholders.
        </p>
        <br/>
        <button><a href="#" style={{backgroundColor: "#3070B6"}}
          className="text-white px-6 py-3 rounded-full">Book a Free Demo →</a> </button>
      </div>
    </div>
  );
};

export default ComprehensiveStaff;
