import foto from "../assets/mi_foto.jpg";
import cv from "../assets/cv.pdf";

export default function SobreMi() {
  return (
    <section
      id="sobre-mi"
      className="
        min-h-screen
        bg-[rgb(var(--bg))] text-[rgb(var(--fg))]
        px-6 py-16 flex items-center
        transition-colors
      "
    >
      <div className="mx-auto w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 items-center gap-10">

        {/* Texto */}
        <div className="order-2 md:order-1">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight"
            data-es="Desarrollador Fullstack"
            data-en="Fullstack Developer"
          >
          </h1>

          <p
            className="mt-4 text-base sm:text-lg leading-relaxed max-w-prose text-left text-[rgb(var(--fg))]"
            data-es="¡Hola! Soy Aday Martín, desarrollador fullstack con una especialización en Inteligencia Artificial y Big Data. Me encanta la tecnología y todo lo que tenga que ver con crear, resolver problemas y experimentar con nuevas ideas. Siempre estoy buscando aprender algo nuevo, porque creo que el aprendizaje continuo es la clave para el crecimiento tanto profesional como personal."
            data-en="Hi! I'm Aday Martín, a full-stack developer with a specialization in Artificial Intelligence and Big Data. I love technology and everything that has to do with creating, solving problems, and experimenting with new ideas. I'm always looking to learn something new because I believe that continuous learning is the key to both professional and personal growth."
          >
          </p>

          {/* Botón CV */}
          <div className="mt-8">
            <a
              href={cv}
              download
              data-es="📄 Descargar CV"
              data-en="📄 Download CV"
              className="
                inline-block px-6 py-3 text-lg font-semibold rounded-xl
                bg-[rgb(var(--accent))] text-[rgb(var(--accent-fg))]
                hover:opacity-90 shadow transition-colors
                ring-1 ring-transparent
              "
            >
            </a>
          </div>

          <br />

          {/* Soft skills */}
          <div className="mt-8">
            <h3
              className="text-xs font-semibold uppercase tracking-wider text-[rgb(var(--muted))]"
              data-es="Soft skills"
              data-en="Soft skills"
            >
              Soft skills
            </h3>

            <ul className="mt-3 flex flex-wrap gap-2">
              {[
                ["🗣️", "Comunicación", "Communication"],
                ["🤝", "Trabajo en equipo", "Teamwork"],
                ["🧩", "Resolución de problemas", "Problem solving"],
                ["🧠", "Pensamiento crítico", "Critical thinking"],
                ["📚", "Aprendizaje continuo", "Continuous learning"],
                ["⏱️", "Gestión del tiempo", "Time management"],
                ["⚡", "Proactividad", "Proactivity"],
              ].map(([icon, es, en]) => (
                <li key={es}>
                  <span
                    className="
                      inline-flex items-center gap-1 rounded-full px-3 py-1 text-sm
                      bg-[rgb(var(--card))]/50 backdrop-blur-sm
                      ring-1 ring-[rgb(var(--card-ring))]
                      transition-colors
                    "
                    data-es={`${icon} ${es}`}
                    data-en={`${icon} ${en}`}
                  >
                    <span aria-hidden>{icon}</span> <span>{es}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Foto */}
        <div className="order-1 md:order-2 flex justify-center md:self-start md:-mt-4">
          <img
            src={foto}
            alt="Foto de Aday Martín"
            className="
              w-40 sm:w-56 md:w-72 lg:w-100 aspect-square object-cover
              rounded-full shadow-lg
              ring-1 ring-[rgb(var(--card-ring))]/60
              bg-[rgb(var(--card))]  /* halo neutro si la img no llena */
              transition-colors
            "
          />
        </div>

      </div>
    </section>
  );
}
