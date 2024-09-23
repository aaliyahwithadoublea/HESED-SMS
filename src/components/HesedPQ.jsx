import React from "react";
import pq from "../assets/pq.webp";

const HesesdPQ = () => {
  return (
    <div style={{margin:"0 auto", marginTop:"-1rem", paddingTop:"2rem"}}>
 <h6 style={{textAlign:"center", fontWeight:"bold", fontSize:"2rem"}}>
 Scale any exams with <span style={{color: "#3070B6"}}>HESED PQ </span>
 </h6>
 <br/> <br/>

 <h2 style={{textAlign:"center"}}>HESED PQ offers a comprehensive library of past questions to help students excel in their exams</h2>

<div style={{height:"100%", width:"100%", objectFit:"cover", marginTop:"3rem"}}>
<img src={pq}  />
</div>
     </div>
  );
};

export default HesesdPQ;
