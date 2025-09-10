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
      name: "Hamza",
      story: "Got admission into Diploma Computer Science- Jamia Millia Islamia.",
      description:
        "Hamza Secured admission into the Diploma program at Jamia Millia Islamia after demonstrating strong academic performance and dedication. Excited to gain hands-on skills and knowledge in their chosen field while contributing actively to campus projects and learning opportunities.",
    },
  ];

  // Create a boolean array to track which card is open
  const [openCards, setOpenCards] = useState(Array(stories.length).fill(false));

const toggleDescription = (index) => {
  setOpenCards((prev) =>
    prev.map((val, i) => (i === index ? !val : false))
  );
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
            className={`card ${openCards[i] ? "active" : ""}`}
            onClick={() => toggleDescription(i)}
          >
            <h2>{s.name}</h2>
            <p className="story">{s.story}</p>
            {openCards[i] && <p className="description">{s.description}</p>}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
