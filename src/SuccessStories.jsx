import React, { useState } from "react";
import { motion } from "framer-motion";
import "./SuccessStories.css";
import Navbar from "./Navbar";
export default function SuccessStories() {
  const stories = [
    {
      name: "Zakariya",
      story: "Got admission into Mechanical Engineering - Jamia Millia Islamia.",
      description:
        "Zakariya secured admission into the Mechanical Engineering program at Jamia Millia Islamia, aiming to build strong technical skills, gain practical engineering experience, and actively participate in innovative projects on campus",
    },
    {
      name: "Sofia Khan",
      story: "Won National Coding Championship.",
      description:
        "Sofia led a team of 3 to develop a smart health app which won her the national championship.",
    },
    {
      name: "Hamza",
      story: "Got admission into Diploma Computer Science- Jamia Millia Islamia.",
      description:
        "Hamza Secured admission into the Diploma program at Jamia Millia Islamia after demonstrating strong academic performance and dedication. Excited to gain hands-on skills and knowledge in their chosen field while contributing actively to campus projects and learning opportunities.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleDescription = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container">
          <Navbar /> 
      <h1>Success Stories</h1>
      <div className="grid">
        {stories.map((s, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px var(--accent)" }}
            className="card"
            onClick={() => toggleDescription(i)}
          >
            <h2>{s.name}</h2>
            <p className="story">{s.story}</p>
            {activeIndex === i && <p className="description">{s.description}</p>}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
