function PortfolioCard({ title, description, link }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "10px",
      padding: "1rem",
      minWidth: "250px",
      minHeight: "150px",
      boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
      backgroundColor: "#fff",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    }}>
      <h2 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>{title}</h2>
      <p style={{ fontSize: "0.9rem", marginBottom: "1rem" }}>{description}</p>
      {link && <a href={link} target="_blank" rel="noopener noreferrer" style={{ color: "#0077cc" }}>View Project</a>}
    </div>
  );
}

export default PortfolioCard;