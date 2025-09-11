import SkillsGroup from './SkillsGroup';
import  '../../styles/index.css';
import  '../../styles/sectionFirst.css';
import LanguagesCard from './LanguagesCard';
import SkillsDropdown from './SkillsDropdown';

function Skills() {
    return (
      <section id="skills" className='sectionFirst'>
          <div>
            <h2>My Skills</h2>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '2rem',
                paddingLeft: '5rem',
                paddingRight: '5rem',}}>
              {/* Java Ecosystem */}
              <SkillsDropdown skillGroup="Java Ecosystem" 
                  skillList={["Java", "J2EE", "Jakarta EE",
                      "Hibernate", "PrimeFaces", "JavaServer Faces", "JPA", 
                      "JPQL", "JDBC", "Maven", "Sockets", "jUnit", "Swing", 
                      "iReport", "JDK (7, 8, 11, 12, 23, 24)"]} />

              {/* Spring Framework */}
              <SkillsDropdown skillGroup="Spring Framework" 
                  skillList={["Spring Boot", "Spring Web", "Spring Data",
                      "Spring Security", "Spring Core", "Thymeleaf"]} />

              {/* Databases */}
              <SkillsDropdown skillGroup="Databases" 
                  skillList={["Oracle SQL","PLSQL","MySQL","PostgreSQL",
                      "H2","JSON","XML"]} />
              
              {/* BackEnd */}
              <SkillsDropdown skillGroup="Back-End" 
                  skillList={["PHP","Django","Rest Framework","Python"]} />

              {/* FrontEnd */}
              <SkillsDropdown skillGroup="Front-End" 
                  skillList={["HTML","CSS","Angular","ReactJS","NodeJS",
                      "Vite","Figma","Gimp"]} />
              
              {/* Full Stack */}
              <SkillsDropdown skillGroup="Full-Stack" 
                  skillList={["Drupal", "WordPress", "JavaScript"]} />
              
              {/* Infrastructure & DevOps  */}
              <SkillsDropdown skillGroup="Infrastructure & DevOps" 
                  skillList={["Tomcat","Docker","Unix","Linux","Ubuntu",
                      "Shell Bash Scripting","Windows Server","WSL",
                      "Microsoft Azure"]} />

              {/* Monitoring & Management */}
              <SkillsDropdown skillGroup="Monitoring & Management" 
                  skillList={["Dynatrace", "Grafana", "Introscope"]} />

              {/* IDEs  */}
              <SkillsDropdown skillGroup="IDEs" 
                  skillList={["Visual Studio", "Android Studio", 
                      "Netbeans", "Eclipse"]} />
              
              {/* Version Control & Project Management */}
              <SkillsDropdown skillGroup="Version Control & Project Management" 
                  skillList={["GitHub", "Jira", "Trello", "ClickUp"]} />
              
              {/* Methodologies & Best Practices */}
              <SkillsDropdown skillGroup="Methodologies & Best Practices" 
                  skillList={["Agile","Scrum","Test-Driven Development (TDD)",
                      "Clean Code","Design Patterns","UML Diagrams",
                      "Customer-Oriented Approach","Microservices"]} />

              {/* Other Skills */}
              <SkillsDropdown skillGroup="Other Skills" 
                  skillList={["Office Tools", "Odoo 14", "Visual Basic"]} />
            </div>
            {/* Languages */}
            <LanguagesCard languageList={[
              {lang:"Spanish", cerfLevel:"C2", certificate:"Native"},
              {lang:"English", cerfLevel:"B2", certificate:"B2 - Trinity - 2020"},
              {lang:"German", cerfLevel:"B1", certificate:" - "}]}/>
          </div>
        </section>
    );
}

export default Skills;