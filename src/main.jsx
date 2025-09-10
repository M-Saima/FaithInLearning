import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SecureUploads from "./SecureUploads";
import FormsAccess from "./FormsAccess";
import LiveMeetings from "./LiveMeetings";
import Gallery from "./Gallery";
import SuccessStories from "./SuccessStories";
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/uploads" element={<SecureUploads />} />
        <Route path="/forms" element={<FormsAccess />} />
        <Route path="/live-meetings" element={<LiveMeetings />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/success-stories" element={<SuccessStories />} />

      </Routes>
    </Router>
    {/* <App /> */}
  </StrictMode>,
)
   
