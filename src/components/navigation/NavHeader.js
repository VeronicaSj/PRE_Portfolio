import React from "react";

function NavHeader() {
  const headerStyle = {
    width: "100%",
    position: "fixed",
    top: 0,
    left: 0,
    background: "linear-gradient(90deg, var(--clr-green), var(--clr-green))",
    color: "var(--clr-white)",
    padding: "12px 24px",
    boxShadow: "0 4px 6px var(--clr-brown)",
    zIndex: 1000,
    height: "60px",
  };

  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };

  const navStyle = {
    display: "flex",
    gap: "20px",
  };

  const linkStyle = {
    color: "var(--clr-white)",
    textDecoration: "none",
    fontWeight: "500",
    position: "relative",
    transition: "color 0.3s",
  };

  const hoverEffect = (e) => {
    e.currentTarget.style.color = "var(--clr-orange)"
    e.currentTarget.style.transform = "translateY(-2px)";
  };

  const leaveEffect = (e) => {
    e.currentTarget.style.color = "var(--clr-white)";
    e.currentTarget.style.transform = "translateY(0)";
  };

  const logoStyle = {
    fontSize: "20px",
    fontWeight: "700",
    letterSpacing: "1px",
    color:"var(--clr-white)",
  };

  return (
    <header style={headerStyle}>
      <div style={containerStyle}>
        <h1 style={logoStyle}>Veronica Sanchez Justicia</h1>
        <nav style={navStyle}>
          {["About", "Experience", "Skills", "Education", "Contact"].map((item, idx) => (
            <a
              key={idx}
              href={`#${item.toLowerCase().replace(/\s/g, "")}`}
              style={linkStyle}
              onMouseEnter={hoverEffect}
              onMouseLeave={leaveEffect}
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default NavHeader;