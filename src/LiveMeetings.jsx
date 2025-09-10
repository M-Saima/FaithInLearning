import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { FaVideo, FaCalendarAlt } from "react-icons/fa";
import "./LiveMeetings.css";

const meetings = [
  {
    title: "Monthly Library Committee Meeting",
    url: "https://meet.google.com/xyz-abc-pqr",
    platform: "Google Meet",
    time: "2025-08-22T17:00:00",
    description: "Discussing monthly updates, events planning, and community activities."
  },
  {
    title: "Volunteers' Strategy Session",
    url: "https://zoom.us/j/123456789",
    platform: "Zoom",
    time: "2025-08-20T19:00:00",
    description: "Collaborative session for upcoming volunteer programs."
  },
  {
    title: "Tech Upgrade Meeting",
    url: "https://teams.microsoft.com/l/meetup-join/19%3ameeting",
    platform: "Microsoft Teams",
    time: "2025-08-25T18:30:00",
    description: "Planning system upgrades and infrastructure improvements."
  }
];

export default function LiveMeetings() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const getCountdown = (meetingTime) => {
    const target = new Date(meetingTime);
    const diff = target - currentTime;

    if (diff <= 0 && diff > -3600000) return "Live Now"; // within 1 hour considered live
    if (diff <= -3600000) return "Ended";

    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    return `${hours}h ${minutes}m ${seconds}s`;
  };

  return (
    <div className="live-meetings-page">
      <Navbar />
      <div className="content-container">
        <h1 className="page-title"><FaVideo /> Live & Upcoming Meetings</h1>
        <p className="page-subtitle">Join live sessions or prepare for upcoming events.</p>

        <div className="meetings-grid">
          {meetings.map((meeting, index) => (
            <div className="meeting-card" key={index}>
              <h2>{meeting.title}</h2>
              <p className="meeting-desc">{meeting.description}</p>
              <div className="meeting-info">
                <span><FaCalendarAlt /> {new Date(meeting.time).toLocaleString()}</span>
                <span className={`status ${getCountdown(meeting.time) === "Live Now" ? "live" : ""}`}>
                  {getCountdown(meeting.time)}
                </span>
              </div>
              {getCountdown(meeting.time) !== "Ended" && (
                <a href={meeting.url} target="_blank" rel="noopener noreferrer" className="join-btn">
                  Join on {meeting.platform}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
