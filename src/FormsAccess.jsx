import React, { useState, useEffect } from "react";
import "./FormsAccess.css";
import { FaWpforms } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
export default function FormsAccess() {
  const [forms, setForms] = useState([]);

  useEffect(() => {
    setForms([
      {
        title: "Women's Volunteer Teaching Drive",
        url: "https://forms.gle/38EPm3NuToE6hNq67",
        description: "Join our initiative to empower women through volunteer teaching. Sign up to contribute your skills and knowledge."
      },
      {
        title: "Registration Form",
        url: "https://forms.gle/8rhs3AkhyzkAj2ER6",
        description: "Register to become a part of our library network and access all our resources and programs."
      },
      {
        title: "Hamraah Registration Form ",
        url: "https://forms.gle/Br21UDhzkf429sGN7",
        description: "Sign up for the Hamraah program aimed at providing community support and outreach activities."
      },
      {
        title: "Makhluq Sewa Registration Form ",
        url: "https://forms.gle/wgxgWZGGf97u24Qt7",
        description: "Volunteer for Makhluq Sewa, a community service initiative focused on helping those in need."
      }
    ]);
  }, []);

  return (
    <>
    <Navbar />
    <div className="forms-page">
      

      {/* Content */}
      <div className="forms-container">
        <h2><FaWpforms className="icon" /> Access Important Forms</h2>
        <p className="subtitle">Submit your details via the following forms</p>

        <div className="forms-list">
          {forms.map((form, index) => (
            <div
              key={index}
              className="form-card"
              onClick={() => window.open(form.url, "_blank")}
            >
              <h3>{form.title}</h3>
              <p>{form.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}
