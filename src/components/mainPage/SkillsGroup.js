import imgSelfie from '../../images/selfie.png';
import infoStyles from '../../styles/info.module.css';
import  '../../styles/index.css';
import  '../../styles/sectionTop.css';

function SkillsGroup({skillGroup, skillList}) {
  return (
        <div>
            <h3>{skillGroup}</h3>
            <ul>
                {skillList.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
  );
}

export default SkillsGroup;