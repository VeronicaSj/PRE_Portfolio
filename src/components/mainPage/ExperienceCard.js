function ExperienceCard({ img,imageAlt, title, role, date, description}) {
  return (
    <div style={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: '#f0f0f0',
        padding: '1rem',
        textAlign: 'center',
    }}>
      <div>
              <img src={img} alt={imageAlt}
                style={{borderradius: '0.25rem', marginbottom: '1rem', maxwidth: '100%',
                    height: 'auto', display: 'block',
                    verticalalign: 'middle',}}
              ></img>
              <h3>{title}</h3>
              <p style={{fontWeight: 'bolder',}}>{role}</p>
              <p style={{fontWeight: 'bolder',}}>{date}</p>
              {description}
            </div>
    </div>
  );
}

export default ExperienceCard;