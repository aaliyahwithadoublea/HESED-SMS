import React from 'react';
import frame3 from '../assets/frame3.webp'
const FinancialManagement = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg mb-8 flex flex-col md:flex-row">
      <div className="md:w-1/2 md:ml-8 mt-4 md:mt-0">
        <h2 className="text-2xl font-bold mb-4" style={{color:"#3070B6"}}>Advanced Financial Management & Secure Payment Portal</h2>
        <p className="text-gray-600 mb-4">
        Simplify financial management and improve your institution's payment processing with HESED SMS robust Financial Management System. Our secure and user-friendly Payment Portal allows students, parents, and staff to make payments effortlessly, covering everything from tuition fees to event tickets and course materials.
        </p>
        <p className="text-gray-600 mb-4">
        Administrators can monitor all transactions, ensuring transparency in the financial flow. Generate invoices, track payment history, and receive instant notifications for successful payments
        </p>
        <p className="text-gray-600 mb-4">
        Built-in security features guarantee that all transactions are encrypted, giving peace of mind to both your institution and its stakeholders.
        </p>
        <br/>
        <button><a href="#" style={{backgroundColor: "#3070B6"}}
          className="text-white px-6 py-3 rounded-full">Book a Free Demo →</a> </button>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <img 
          src={frame3} 
          alt="Advanced Financial Management" 
          className="rounded-md"
        />
      </div>
    </div>
  );
};

export default FinancialManagement;
