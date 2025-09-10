import imgLogoAreaF5 from '../../images/logoAreaF5.jpg';
import imgLogoPythonman from '../../images/logoPythonman.jpeg';
import imgLogoGesvision from '../../images/logoGesvision.jpg';
import imgLogoKyndryl from '../../images/logoKyndryl.jpg';

import  '../../styles/index.css';
import  '../../styles/sectionSecond.css';
import ExperienceCard from './ExperienceCard';

function Experience() {
    return (
      <section id="experience" className='sectionSecond'>
        <div>
          <h2 className='header'>
            My Experience
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '2rem',
            paddingLeft: '5rem',
            paddingRight: '5rem',
          }}>
            <ExperienceCard 
                img={imgLogoAreaF5} 
                imageAlt={"Area F5 Logo"} 
                title={"Area F5, Granada"} 
                role={"Web Developer Internship"} 
                date={"March 2025  – June 2025"} 
                description={
                <ul>
                  <li>
                    Project 1: 
                  </li>
                  <ul>
                    <li>
                      BackEnd and SEO, https://www.psicologia.io/ with Drupal
                    </li>
                    <li>
                      Technologies: Drupal, PHP, Schema.org Metatag, MySQL, WSL, Docker
                    </li>
                  </ul>
                  <li>
                    Project 2: 
                  </li>
                  <ul>
                    <li>
                      Full Stack, Complete web for Diet Planning using AI
                    </li>
                    <li>
                      Tasks: Local Environment, Entity-Relationship, Wireframe, UI/UX, REST API
                    </li>
                    <li>
                      Technologies: Django REST Framework, Python, ReactJS, NodeJS,
                      MUI Material, Ollama, PostgreSQL, Docker, WSL, Draw.io
                    </li>
                  </ul>
                </ul>}>
            </ExperienceCard>
            <ExperienceCard 
                img={imgLogoPythonman} 
                imageAlt={"PythonMan Logo"} 
                title={"PythonMan, Granada"} 
                role={"FullStack Developer Volunteering"} 
                date={"February 2025 - March 2025"} 
                description={
                  <ul>
                    <li>
                      Company's website Development.
                    </li>
                    <li>
                      Technologies: ReactJS, Django, NodeJS, Git Hub, Scrum
                    </li>
                  </ul>}>
            </ExperienceCard>
            <ExperienceCard 
                img={imgLogoGesvision} 
                imageAlt={"Gesvisión Logo"} 
                title={"Gesvisión, Granada"} 
                role={"Java Developer Internship"} 
                date={"February 2025"} 
                description={
                <ul>
                  <li>
                    Technologies: JakartaEE, J2EE, JPA, Hibernate, JavaServer Faces, PrimeFaces
                  </li>
                </ul>}>
            </ExperienceCard>
            <ExperienceCard 
                img={imgLogoKyndryl} 
                imageAlt={"Kyndryl Logo"} 
                title={"Kyndryl, Granada"} 
                role={"Middleware Technician"} 
                date={"December 2023 - June 2024"} 
                description={
                  <ul>
                    <li>
                      Maintenance and review of J2EE infrastructure, Arqos, Documentum, and AS400
                    </li>
                    <li>
                      Resolution of incidents, requests, migrations, patching, and deployments
                    </li>
                    <li>
                      Technologies: Linux, Unix, Shell Bash Scripting, Tomcat, Dynatrace, Grafana, Azure
                    </li>
                  </ul>
                }>
            </ExperienceCard>
          </div>
        </div>
      </section>
    );
}

export default Experience;