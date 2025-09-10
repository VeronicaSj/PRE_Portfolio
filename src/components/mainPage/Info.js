import imgSelfie from '../../images/selfie.png';
import infoStyles from '../../styles/info.module.css';
import  '../../styles/index.css';
import  '../../styles/sectionTop.css';

function Info() {
  return (
    <section id='info' className="sectionTop">
        <img src={imgSelfie} alt="Selfie"
            className={infoStyles.imgSelfie} ></img>
        <h1 className='header'>Veronica Sanchez Justicia</h1>
        <h3 className='header'>Full Stack Web Developer, Backend & Frontend | Systems Administrator</h3>
        <a href="#experience">
            View Experience
        </a>
    </section>
  );
}

export default Info;