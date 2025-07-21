import React from "react";
import "./Custom2.style.css";


const TeamSection = () => {
  // Team members data with names, images, and portfolio links
  const teamMembers = [
    { 
      name: "Sharda Waghmare", 
      img: "/images/Project-Thumbnail/sharda.png", 
      portfolio: "https://shardawaghmare.in/" 
    },
    { 
      name: "Pranav Belorkar", 
      img: "/images/Project-Thumbnail/Pranav.jpg", 
      portfolio: "http://pranavbelorkar.in/" 
    },
    { 
      name: "Sanjana Kashinkar", 
      img: "/images/Project-Thumbnail/sanjana.jpg", 
      portfolio: "https://sanjanakashimkar.in/#home" 
    },
    { 
      name: "Amod Chaudhari", 
      img: "/images/Project-Thumbnail/Amod.png", 
      portfolio: "http://amodchaudhari.in/" 
    },
    { 
      name: "Shubhangi Tijare", 
      img: "/images/Project-Thumbnail/shubhangi.png", 
      portfolio: "https://shubhangitijare.in/" 
    },
    { 
      name: "Abhishek Tumsare", 
      img: "/images/Project-Thumbnail/abhishek.png", 
      portfolio: "http://abhishektumsare.in/" 
    },
    { 
      name: "Tanushri Dhote", 
      img: "/images/Project-Thumbnail/tanushri.png", 
      portfolio: "http://tanushri.vercel.app/" 
    },
  ];

  return (
    <section className="unique-team-section-wrapper">
      <h2 className="section-title font-weight-bold mb-3">Our Team</h2>
      <div className="unique-team-members">
        {teamMembers.map((member, index) => (
          <div className="unique-team-member-card" key={index}>
            <a href={member.portfolio} target="_blank" rel="noopener noreferrer">
              <img src={member.img} alt={member.name} loading="lazy" />
              <span className="unique-team-member-name">{member.name}</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
