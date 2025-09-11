import imgSelfie from '../../images/selfie.png';
import infoStyles from '../../styles/info.module.css';
import  '../../styles/index.css';
import  '../../styles/sectionTop.css';

function Info() {
  const buttonStyle = {
    display: "inline-block",
    padding: "12px 24px",
    backgroundColor: "var(--clr-bg)",
    color: "var(--clr-orange)",
    fontWeight: "600",
    textDecoration: "none",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
    transition: "all 0.3s ease",
    cursor: "pointer",
  };

  const hoverEffect = (e) => {
    e.currentTarget.style.backgroundColor = "var(--clr-bg)";
    e.currentTarget.style.transform = "translateY(-3px)";
    e.currentTarget.style.boxShadow = "0 6px 12px var(--clr-black)";
  };

  const leaveEffect = (e) => {
    e.currentTarget.style.backgroundColor = "var(--clr-bg)";
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "0 4px 8px var(--clr-black)";
  };

  return (
    <section id='info' className="sectionTop">
        <img src={imgSelfie} alt="Selfie"
            className={infoStyles.imgSelfie} ></img>
        <h1 className='header'>Veronica Sanchez Justicia</h1>
        <h3 className='header'>Full Stack Web Developer, Backend & Frontend | Systems Administrator</h3>
        <a
            href="#experience"
            style={buttonStyle}
            onMouseEnter={hoverEffect}
            onMouseLeave={leaveEffect}
          >
            View Experience
        </a>
    </section>
  );
}

export default Info;