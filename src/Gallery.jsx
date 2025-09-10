import React, { useState } from "react";
import Navbar from "./Navbar";
import "./Gallery.css";
import { FaImages } from "react-icons/fa";;
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  // const images = [
  //   "/gallery/img1.png",
  //   "/gallery/img2.png",
  //   "/gallery/img3.png",
  //   "/gallery/img4.JPG",
  //   "/gallery/img8.jpg",
  //   "/gallery/img9.jpg",
  //   "/gallery/img10.jpg",
  //   "/gallery/img11.jpg",
  //   "/gallery/img12.jpg",
  //   "/gallery/img13.jpg",
  //   "/gallery/img14.jpg",
  //   "/gallery/img15.jpg",
  // ];
const images = Object.values(import.meta.glob('./assets/images/*.{jpg,jpeg,png,JPG,JPEG,PNG}', { eager: true }))
  .map((module) => module.default);

  return (
    
    <div className="gallery-page">
     <Navbar /> 
      <header className="gallery-header">
        <FaImages className="gallery-icon" />
        <h1>Gallery</h1>
        <p>Explore moments captured from our events & meetings</p>
      </header>

      <div className="gallery-grid">
        {images.map((src, i) => (
          <div
            key={i}
            className="gallery-item"
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
          >
            <img src={src} alt={`Gallery ${i}`} loading="lazy" />
          </div>
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={images.map((src) => ({ src }))}
        index={index}
        plugins={[Zoom]} // Removed Thumbnails here
        />
    </div>
  );
};

export default Gallery;
