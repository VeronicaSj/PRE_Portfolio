import React, { useState } from "react";

export default function SkillsDropdown({ skillGroup, skillList }) {
  const [isOpen, setIsOpen] = useState(false);

  const containerStyle = {
    width: "100%",
    margin: "5px auto",
    border: "1px solid #ccc",
    borderRadius: "6px",
    boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#fff",
  };

  const listStyle = {
    listStyleType: "none",
    padding: "8px 20px",
    margin: 0,
    display: isOpen ? "block" : "none",
    backgroundColor: "var(--clr-light-orange)",
    color : "var(--clr-brown)",
    position: "absolute"
  };

  const hoverEffect = (e) => {
    e.currentTarget.style.backgroundColor = "var(--clr-orange)";
    e.currentTarget.style.color = "var(--clr-white)";
    setIsOpen(true)
  };

  const leaveEffect = (e) => {
    e.currentTarget.style.backgroundColor = "var(--clr-white)";
    e.currentTarget.style.color = "var(--clr-brown)";

    setIsOpen(false)
  };

  return (
    <div style={containerStyle} 
        onMouseEnter={hoverEffect}
        onMouseLeave={leaveEffect}
        >
      <p >
        {skillGroup} {isOpen ? "▲" : "▼"}
      </p>
      <ul style={listStyle}>
        {skillList.map((skill, index) => (
          <li key={index} >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}