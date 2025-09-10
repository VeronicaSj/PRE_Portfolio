import  '../../styles/index.css';
import  '../../styles/sectionFirst.css';

function About() {
  return (
    <section id="about" className="sectionFirst">
        <h2 style={{color: "var(--clr-orange)"}}>
            About Me
        </h2>
        <p>
            Full Stack Developer with experience in backend (Java, Python, Django 
            REST, Spring Boot) and frontend (ReactJS, Angular, Drupal). Expert in 
            infrastructure and DevOps (Docker, Linux, Azure), with knowledge of 
            technical SEO and best practices such as Clean Code and TDD. Passionate
            about creating scalable, efficient solutions that focus on user 
            experience.
        </p>
    </section>
  );
}

export default About;