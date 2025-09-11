import React from "react";
import { FaWhatsapp, FaEnvelope, FaLinkedin, FaGithub, FaGlobe } from "react-icons/fa";

export default function FloatingContactBar() {
  const barStyle = {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    display: "flex",
    gap: "12px",
    backgroundColor: "var(--clr-white)",
    padding: "10px 14px",
    borderRadius: "50px",
    boxShadow: "0 6px 15px var(--clr-black)",
    zIndex: 999,
  };

  const iconContainer = {
    position: "relative",
    width: "44px",
    height: "44px",
    borderRadius: "50%",
    backgroundColor: "var(--clr-green)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "var(--clr-white)",
    fontSize: "18px",
    cursor: "pointer",
    transition: "transform 0.2s, background-color 0.2s",
  };

  const tooltipStyle = {
    position: "absolute",
    bottom: "50px",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "var(--clr-brown)",
    color: "var(--clr-white)",
    padding: "6px 10px",
    borderRadius: "6px",
    fontSize: "12px",
    whiteSpace: "nowrap",
    opacity: 0,
    pointerEvents: "none",
    transition: "opacity 0.2s",
  };

  const showTooltip = (e) => {
    e.currentTarget.querySelector(".tooltip").style.opacity = 1;
    e.currentTarget.style.transform = "scale(1.2)";
  };

  const hideTooltip = (e) => {
    e.currentTarget.querySelector(".tooltip").style.opacity = 0;
    e.currentTarget.style.transform = "scale(1)";
  };

  const contacts = [
    {
      icon: <FaWhatsapp />,
      href: "https://wa.me/34644048205",
      tooltip: "+34 644 048 205",
      target: "_blank",
    },
    {
      icon: <FaEnvelope />,
      href: "mailto:veronicasanchezjusticia2@gmail.com",
      tooltip: "veronicasanchezjusticia2@gmail.com",
      target: "_self",
    },
    {
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/ver%C3%B3nica-s%C3%A1nchez-justicia-825a7421a/",
      tooltip: "LinkedIn",
      target: "_blank",
    },
    {
      icon: <FaGlobe />,
      href: "https://veronicasj.github.io/Portfolio/",
      tooltip: "Portfolio",
      target: "_blank",
    },
    {
      icon: <FaGithub />,
      href: "https://github.com/VeronicaSj",
      tooltip: "GitHub",
      target: "_blank",
    },
  ];

  return (
    <div style={barStyle}>
      {contacts.map((contact, index) => (
        <a
          key={index}
          href={contact.href}
          target={contact.target}
          rel="noreferrer"
          style={iconContainer}
          onMouseEnter={showTooltip}
          onMouseLeave={hideTooltip}
        >
          {contact.icon}
          <span className="tooltip" style={tooltipStyle}>
            {contact.tooltip}
          </span>
        </a>
      ))}
    </div>
  );
}