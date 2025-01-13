import React from "react";
import "../Styles/Members.css"; // Custom styles
import HimanshuKawale from "../assets/Members/HimanshuKawale.jpg";
import BhaveshChaudhari from "../assets/Members/BhaveshChaudhari.jpg";
import DevendraPatil from "../assets/Members/DevendraPatil.png";
import JayeshMahajan from "../assets/Members/JayeshMahajan.jpg";
import KhushiChhari from "../assets/Members/KhushiChhari.jpg";
import LokeshSapkale from "../assets/Members/LokeshSapkale.jpg";
import PiyushSalunkhe from "../assets/Members/PiyushSalunkhe.jpg";
import PurvaTiwari from "../assets/Members/PurvaTiwari.jpeg";
import Lokesh from "../assets/Members/Lokesh2.jpg";

import Jain from "../assets/Team/Neeraj.jpg";
import Shreyas from "../assets/Team/Shreyash-badgujar.jpg";
import Logo from "../assets/Logo/Linked.png"; // Import LinkedIn logo

const teamMembers = {
  Technical: [
    { name: "Himanshu Kawale", role: "Technical Member", photo: HimanshuKawale, linkedin: "https://www.linkedin.com/in/himanshu-kawale-69912b189?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { name: "Lokesh Sapkale", role: "Technical Member", photo: LokeshSapkale, linkedin: "https://www.linkedin.com/in/lokesh-sapkale-a038722a9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { name: "Khushi Chhari", role: "Technical Member", photo: KhushiChhari, linkedin: "" },
  ],
  Design: [
    { name: "Neeraj Rakhicha", role: "Design Lead", photo: Jain, linkedin: "https://www.linkedin.com/in/rohit-pitrubhakt-5a2737257" },
  ],
  Marketing: [
    { name: "Lokesh Sapkale", role: "Marketing Member", photo: Lokesh, linkedin: "" },
    { name: "Bhavesh Chaudhari", role: "Marketing Member", photo: BhaveshChaudhari, linkedin: "" },
    { name: "Piyush Salunkhe", role: "Marketing Member", photo: PiyushSalunkhe, linkedin: "" },
    { name: "Purva Tiwari", role: "Marketing Member", photo: PurvaTiwari, linkedin: "" },
  ],
  Logistics: [
    { name: "Jayesh Mahajan", role: "Logistics Member", photo: JayeshMahajan, linkedin: "https://www.linkedin.com/in/kunal-badgujar-0b1b3b1b7" },
  ],
  Finance: [
    { name: "Shreyas Badgujar", role: "Finance Lead", photo: Shreyas, linkedin: "https://www.linkedin.com/in/shreyas-badgujar-0b1b3b1b7" },
  ],
  Operations: [
    { name: "Devendra Patil", role: "Operational Member", photo: DevendraPatil, linkedin: "https://www.linkedin.com/in/kunal-badgujar-0b1b3b1b7" },
  ],
};

const Members = () => {
  return (
    <section id="Team" className="team-section Team">
      <h2 className="team-title font-[Ghr4] text-white">Meet Our Team</h2>
      {Object.entries(teamMembers).map(([section, members]) => (
        <div key={section} className="team-category">
          <h3 className="team-title">{section} Team</h3>
          <div className="team-container">
            {members.map((member, index) => (
              <div
                key={index}
                className="team-card transform transition-transform hover:scale-105 hover:shadow-lg"
              >
                <img src={member.photo} alt={member.name} className="team-photo" />
                <h3 className="team-name text-black font-[Ghr4]">{member.name}</h3>
                <p className="team-role">{member.role}</p>
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="linkedin-link"
                  >
                    <img src={Logo} alt="LinkedIn" className="w-6 items-center" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Members;
