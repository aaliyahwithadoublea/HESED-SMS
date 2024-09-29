import React from 'react';
import meeting from '../assets/meeting.png'


const AboutUsHero = () => {

    console.log()
    return (
        <section
        className="bg-cover bg-center h-80 flex items-center justify-center"
        style={{ backgroundImage: `url(${meeting})` }}
      >
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white" >About Us</h1>
          <hr style={{width:"10rem", margin:"0 auto", border:"2px solid white", marginTop:"1rem"}}/>
          <p className="text-lg text-white mt-4">
            Founded in 2021, the company prides itself in the enhanced productivity and <pre /> efficiency of customers and the resultant lifelong impact on education.
          </p>
        </div>

    
      </section>
      
    );
  };
  
  export default AboutUsHero;