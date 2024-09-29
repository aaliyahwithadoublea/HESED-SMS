import React from 'react';
import mission from '../assets/mission.png';
import vision from '../assets/vision.png';

const Vision = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center" style={{padding:"2rem" }}>
        {/* Mission */}
        <div className="flex flex-col items-center text-center">
          <h2 className="text-2xl font-bold text-blue-600" style={{textAlign:"left"}}>Our Mission</h2>
          <p className="mt-4 text-lg" style={{textAlign:"left"}}>
            We’re more than just an educational<pre /> technology company; we’re trailblazers <pre /> with a mission to transform school <pre />  administration! Our latest innovation <pre />  introduces a groundbreaking feature that <pre />  enhances student safety and supervision. <pre /> Prepare for a safer, more efficient, and<pre />  more connected educational<pre />  environment!
          </p>
        </div>
        <img src={mission} alt="Mission" className="rounded-lg mx-auto" style={{height:"20rem"}} />

        {/* Vision */}
        <div className="flex flex-col items-center text-center">
          <h2 className="text-2xl font-bold text-yellow-500" style={{textAlign:"left"}}>Our Vision</h2>
          <p className="mt-4 text-lg" style={{textAlign:"left"}}>
            At HESED, our vision is to cultivate a <pre />  collaborative community where students, <pre /> parents, and educators unite in a collective<pre />  pursuit of educational excellence.
          </p>
        </div>
        <img src={vision} alt="Vision" className="rounded-lg mx-auto" style={{height:"15rem"}}/>
      </div>
    </section>
  );
};

export default Vision;
