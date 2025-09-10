import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import logo from './assets/Education.png';
import carousel1 from './assets/images/a1.jpg';
import carousel2 from './assets/images/a2.jpg';
import carousel3 from './assets/images/a3.jpg';
import carousel4 from './assets/images/a4.jpg';
import carousel5 from './assets/images/a5.jpg';
import { FaHome,FaImages ,FaUserGraduate  } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { FaCloudUploadAlt, FaFileAlt, FaVideo, FaBell, FaUsers, FaWpforms } from "react-icons/fa";

const images = [carousel1, carousel2, carousel3, carousel4, carousel5];

function Carousel() {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));
    }, 4000);
    return () => clearInterval(id);
  }, []);

  const prevSlide = () => setCurrent((p) => (p === 0 ? images.length - 1 : p - 1));
  const nextSlide = () => setCurrent((p) => (p === images.length - 1 ? 0 : p + 1));

  return (
    <div className="carousel-wrapper">
      <div className="carousel-wrapper">
        <motion.img
          key={current}
          src={images[current]}
          alt="carousel"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />
        <button onClick={prevSlide} aria-label="previous" className="carousel-arrow left">
          ◀
        </button>
        <button onClick={nextSlide} aria-label="next" className="carousel-arrow right">
          ▶
        </button>
        <div className="carousel-indicators">
          {images.map((_, i) => (
            <div
              key={i}
              onClick={() => setCurrent(i)}
              className={`dot ${i === current ? 'active' : ''}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [visits, setVisits] = useState(0);
  const quotes = [
    "Education is the most powerful weapon which you can use to change the world. – Nelson Mandela",
    "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
    "Success is not final, failure is not fatal: it is the courage to continue that counts. – Winston Churchill",
    "Do not wait to strike till the iron is hot, but make it hot by striking. – William Butler Yeats",
    "It always seems impossible until it’s done. – Nelson Mandela",
    "Great minds discuss ideas; average minds discuss events; small minds discuss people. – Eleanor Roosevelt",
    "Hardships often prepare ordinary people for an extraordinary destiny. – C.S. Lewis",
    "Your time is limited, so don't waste it living someone else's life. – Steve Jobs",
    "The secret of getting ahead is getting started. – Mark Twain",
    "Believe you can and you're halfway there. – Theodore Roosevelt"
  ];
  const [quoteIndex, setQuoteIndex] = useState(0);
  const colors = ["#f472b6", "#34d399", "#818cf8"];

  useEffect(() => {
  const interval = setInterval(() => {
    setQuoteIndex((prev) => (prev + 1) % quotes.length);
  }, 9000);
  return () => clearInterval(interval);
}, []);

useEffect(() => {
  let count = localStorage.getItem("visitCount");
  count = count ? parseInt(count) + 1 : 1;
  localStorage.setItem("visitCount", count);
  setVisits(count);
}, []);

const [dateTime, setDateTime] = useState(new Date());

useEffect(() => {
  const timer = setInterval(() => setDateTime(new Date()), 1000);
  return () => clearInterval(timer);
}, []);
  return (
    <div className="dark min-h-screen flex flex-col justify-between  font-sans">
       <div className="flex-1">
      <Navbar />

      <header id="home" className="intro-header">
           <div 
            style={{
              position: "fixed",
              top: "17%",
              right: "28px",
              transform: "translateY(-50%)",
              background: "rgba(255,255,255,0.1)", 
              backdropFilter: "blur(6px)", 
              color: "#00f5d4",
              padding: "10px 15px",
              borderRadius: "12px",
              fontSize: "14px",
              fontWeight: "500",
              boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
              letterSpacing: "0.5px",
              transition: "all 0.3s ease",
              cursor: "default"
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-50%) scale(1.1)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(-50%) scale(1)"}
          >
            {dateTime.toLocaleString()}
          </div>        
        <h2 className="highlight-text">Welcome to Library Connect</h2>
        <p className="text-lg">
          Your centralized free hub to access updates, meetings, forms, resources, and confidential documents.
        </p>
        <p className="highlight-text">
          Study, grow, and become what you dream—together.
        </p>

        <style>
        {`
        .highlight-text {
          margin-top: 2rem;
          font-size: 1.5rem;
          font-weight: bold;
          background: linear-gradient(90deg, #ff6ec7, #38bdf8, #a3ff6b);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 5s infinite linear;
          text-align: center;
        }

        @keyframes shimmer {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        `}
        </style>
        <div className="animate-pulse bg-gray-800 rounded-lg p-6">
          <div className="h-6 bg-gray-700 rounded w-3/4 mb-3" />
          <div className="h-4 bg-gray-700 rounded w-full mb-2" />
          <div className="h-4 bg-gray-700 rounded w-5/6" />
        </div>
    <motion.p
      key={quoteIndex}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1, color: colors[quoteIndex] }}
      transition={{ duration: 3.6 }}
      style={{ marginTop: "4rem" }}
      className="text-center mt-16 text-xl italic font-semibold">
      “{quotes[quoteIndex]}”
    </motion.p>

      </header>
      <Carousel />
      <div className="cards-container">
              <motion.div
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px var(--accent)" }}
            className="card"
          >
         <Link to="/uploads" style={{ textDecoration: "none", color: "inherit" }}>
          <FaCloudUploadAlt className="card-icon" style={{ color: "#4e5ef7" }} />
          <h3>Secure Uploads</h3>
          <p>Upload confidential documents safely.</p>
      </Link>
      </motion.div>
    {/* </div> */}
     <motion.div
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px var(--accent)" }}
            className="card"
          >
      {/* <div className="card"> */}
        <Link to="/forms" style={{ textDecoration: "none", color: "inherit" }}>
          <FaFileAlt className="card-icon" style={{ color: "#8a4fff" }} />
          <h3>Forms</h3>
          <p>Download and submit student & faculty forms.</p>
        </Link>
      {/* </div> */}
      </motion.div>
        <motion.div
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px var(--accent)" }}
            className="card"
          >
      {/* <div className="card"> */}
        <Link to="/live-meetings" style={{ textDecoration: "none", color: "inherit" }}>
        <FaVideo className="card-icon" style={{ color: "#007bff" }} />
        <h3>Live Meetings</h3>
        <p>Stay informed about upcoming sessions.</p>
        </Link>
      {/* </div> */}
      </motion.div>
            <motion.div
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px var(--accent)" }}
            className="card"
          >
      {/* <div className="card"> */}
        <FaBell className="card-icon" style={{ color: "#ff9800" }} />
        <h3>Latest Updates</h3>
        <p>Check the newest announcements and news.</p>
      {/* </div> */}
      </motion.div>
      <motion.div
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px var(--accent)" }}
            className="card"
          >
      {/* <div className="card"> */}
        <Link to="/gallery" style={{ textDecoration: "none", color: "inherit" }}>
        <FaImages className="card-icon" style={{ color: "#00b894" }} />
        <h3>Gallery</h3>
        <p>See scheduled meetings and moments captured.</p>
        </Link>
      {/* </div> */}
      </motion.div>
<motion.div
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px var(--accent)" }}
            className="card"
          >
      {/* <div className="card"> */}
        <Link to="/success-stories" style={{ textDecoration: "none", color: "inherit" }}>
        <FaUserGraduate className="card-icon" style={{ color: "#00cec9" }} />
        <h3>Success Stories</h3>
        <p>Read inspiring stories from our alumni.</p>
        </Link>
      {/* </div> */}
      </motion.div>

  </div>
  </div>
    <div style={{ 
        textAlign: "center", 
        color: "#9ca3af", 
        marginBottom: "45px" 
      }}>
    Visitors: {visits}
  </div>

  </div>
);
}
