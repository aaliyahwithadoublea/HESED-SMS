import React from "react";
import picture1 from "../assets/picture1.png";
import picture2 from "../assets/picture2.png";
import picture3 from "../assets/picture3.png";
import picture4 from "../assets/picture4.png";

const features = [
  {
    image: picture1,
    title: "Instant Announcement System",
    description:
      "Instantly share events, deadlines, and updates with the entire school community using HESED-SMS Announcement System.",
    linkText: "Try for free",
  },
  {
    image: picture2,
    title: "E-Lesson Notes",
    description:
      "Our Notes simplify the process of creating, organizing, and sharing lesson plans.",
    linkText: "Try for free",
  },
  {
    image: picture3,
    title: "Inventory Management",
    description:
      "Manage and track school resources, ensuring that all supplies are properly accounted for.",
    linkText: "Try for free",
  },
  {
    image: picture4,
    title: "Task Scheduler",
    description:
      "Manage daily, weekly, and monthly responsibilities to ensure nothing falls through the cracks.",
    linkText: "Try for free",
  },
];

const AdditionalFeatures = () => {
  return (
    <div className="inline-grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto my-6 items-center justify-center" style={{marginTop:"-2rem", padding:"2rem", backgroundColor: "#E8EBF0"}}>
      {features.map((feature, index) => (
        <div key={index} className="bg-white p-3 rounded-lg shadow-lg" >
          <div style={{ display: "flex", gap:"2rem" }}>
            <div>
              <img
                src={feature.image}
                style={{ width: "650px", height: "220px" }}
              />
            </div>
        <div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600 mb-4">{feature.description}</p>
            <a
              href="#"
              className="text-blue-500 hover:text-blue-700 font-medium"
            >
              {feature.linkText} →
            </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdditionalFeatures;
