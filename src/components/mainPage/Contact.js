import React from "react";
import { FaWhatsapp, FaEnvelope, FaLinkedin, FaGithub, FaGlobe } from "react-icons/fa";

function Contact() {
  const containerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(160px, 1fr))",
    gap: "20px",
    padding: "20px",
    maxWidth: "800px",
    margin: "40px auto",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  };

  const cardStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    padding: "16px",
    borderRadius: "12px",
    backgroundColor: "var(--clr-white)",
    textDecoration: "none",
    color: "var(--clr-brown)",
    transition: "all 0.2s ease",
    cursor: "pointer",
    textAlign: "center",
  };

  const iconStyle = {
    fontSize: "28px",
    color: "var(--clr-orange)",
    transition: "color 0.2s, transform 0.2s",
  };

  const hoverEffect = (e) => {
    e.currentTarget.style.backgroundColor = "var(--clr-orange)";
    e.currentTarget.style.color = "var(--clr-white)";
    e.currentTarget.querySelector("svg").style.color = "var(--clr-white)";
    e.currentTarget.style.transform = "translateY(-5px)";
  };

  const leaveEffect = (e) => {
    e.currentTarget.style.backgroundColor = "var(--clr-white)";
    e.currentTarget.style.color = "var(--clr-brown)";
    e.currentTarget.querySelector("svg").style.color = "var(--clr-orange)";
    e.currentTarget.style.transform = "translateY(0)";
  };

  const contacts = [
    {
      icon: <FaWhatsapp />,
      label: "+34 644 048 205",
      href: "https://wa.me/34644048205",
      target: "_blank",
    },
    {
      icon: <FaEnvelope />,
      label: "veronicasanchezjusticia2@gmail.com",
      href: "mailto:veronicasanchezjusticia2@gmail.com",
      target: "_self",
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ver%C3%B3nica-s%C3%A1nchez-justicia-825a7421a/",
      target: "_blank",
    },
    {
      icon: <FaGlobe />,
      label: "Portfolio",
      href: "https://veronicasj.github.io/Portfolio/",
      target: "_blank",
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      href: "https://github.com/VeronicaSj",
      target: "_blank",
    },
  ];

  return (
    <section id="contact">
      <h2>Contact</h2>
      <p>You can contact me through the following means:</p>
      <div style={containerStyle}>

      {contacts.map((contact, index) => (
        <a
          key={index}
          href={contact.href}
          target={contact.target}
          rel="noreferrer"
          style={cardStyle}
          onMouseEnter={hoverEffect}
          onMouseLeave={leaveEffect}
        >
          <div style={iconStyle}>{contact.icon}</div>
          <span>{contact.label}</span>
        </a>
      ))}
    </div>
    </section>
  );
}

export default Contact;