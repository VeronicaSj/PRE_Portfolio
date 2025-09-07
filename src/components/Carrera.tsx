// components/Carrera.tsx
type Role = {
  period: string;
  title: { es: string; en: string };
  company: { es: string; en: string };
  location?: { es: string; en: string };
  mode?: { es: string; en: string };        // Presencial / Híbrido / Remoto
  summary?: { es: string; en: string };
  highlights?: { es: string; en: string }[];
  links?: { label: { es: string; en: string }; href: string }[];
};

const CAREER: Role[] = [
  {
    period: "2024 — Actualidad",
    title: { es: "Desarrollador Freelance", en: "Freelance Developer" },
    company: { es: "Freelance", en: "Freelance" },
    location: { es: "Sevilla, España", en: "Seville, Spain" },
    summary: {
      es: "En este tiempo he desarrollado algunos projectos freelance, como una pagina para uso comercial totalmente operativa, asi como varios proyectos personales.",
      en: "During this time I have developed some freelance projects, such as a fully operational website for commercial use, as well as several personal projects.",
    },
    highlights: [
      { es: "Python", en: "Python" },
      { es: "PHP", en: "PHP" },
      { es: "Javascript", en: "Javascript" },
      { es: "MongoDB", en: "MongoDB" },
      { es: "MySQLi", en: "MySQLi" },
      { es: "React", en: "React" },
      { es: "Typescript", en: "React" },
      { es: "Git", en: "Git" },
      { es: "Tailwind CSS", en: "Tailwind CSS" },
    ],
    links: [
      {
        label: { es: "Ver repositorio", en: "View repository" },
        href: "https://github.com/aday-ma",
      },
    ],
  },
  {
    period: "2022-2024",
    title: { es: "Desarrollador de Software - Salesforce", en: "Software Developer - Salesforce" },
    company: { es: "Atos", en: "Atos" },
    location: { es: "Sevilla, España", en: "Seville, Spain" },
    mode: { es: "Teletrabajo", en: "Telecommuting" },
    summary: {
      es: "Desarrollo y mantenimiento de una aplicacion en Salesforce, creando nuevas funcionalidades para la misma y corrigiendo errores que se daban en el dia.",
      en: "Development and maintenance of an application in Salesforce, creating new functionalities for it and correcting errors that occurred during the day..",
    },
    highlights: [
      { es: "Salesforce", en: "Salesforce" },
      { es: "Apex", en: "Apex" },
      { es: "Aura", en: "Aura" },
      { es: "Componentes lightning", en: "Lightning Components" },
      { es: "Triggers", en: "Triggers" },
      { es: "Process building", en: "Process building" },
      { es: "SQL", en: "SQL" },

    ],
  },
  {
    period: "2022 — 2022",
    title: { es: "Desarrollador Junior", en: "Junior Developer" },
    company: { es: "Prácticas DAM", en: "DAM Internship" },
    location: { es: "Sevilla, España", en: "Seville, Spain" },
    mode: { es: "Presencial", en: "On-site" },
    summary: {
      es: "Creamos una app interna para el manejo de fechas de entregas de proyectos.",
      en: "We created an internal app for managing project delivery dates..",
    },
    highlights: [
      { es: "Java", en: "Java" },
      { es: "Spring boot", en: "Spring boot" },
      { es: "Angular", en: "Angular" },
      { es: "Typescript", en: "Typescript" },
      { es: "SQL", en: "SQL" },
      { es: "Git", en: "Git" },
    ],
  },
];

export default function Carrera() {
  return (
    <section id="carrera" className="relative mx-auto max-w-5xl px-6 py-24">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(251,146,60,0.08),transparent_70%)]" />

      <h2
        className="mb-12 text-3xl font-semibold"
        data-es="Carrera"
        data-en="Career"
      >
        Carrera
      </h2>

      <div className="relative pl-6">
        {/* 🚦 Rail con degradado INVERTIDO:
            empieza transparente arriba y termina intenso abajo */}
        <div className="absolute left-0 top-0 h-full w-1 rounded-full bg-gradient-to-b from-transparent via-blue-400/30 to-blue-400/80" />

        <div className="space-y-8">
          {CAREER.map((item, idx) => (
            <article
              key={idx}
              className="relative rounded-2xl bg-slate-900/60 p-5 ring-1 ring-slate-800/70 transition-transform duration-300 hover:translate-x-1 hover:shadow-lg hover:shadow-blue-400/10"
            >
              {/* Nodo */}
              <span className="absolute -left-3 top-6 inline-block h-4 w-4 rounded-full bg-blue-400 ring-4 ring-slate-950" />

              {/* Cabecera */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center rounded-full bg-slate-800 px-2.5 py-1 text-xs font-semibold text-blue-300">
                  {item.period}
                </span>

                {item.mode && (
                  <span
                    className="inline-flex items-center rounded-full bg-slate-800/70 px-2.5 py-1 text-[10px] uppercase tracking-wide text-slate-300"
                    data-es={item.mode.es}
                    data-en={item.mode.en}
                  >
                    {item.mode.es}
                  </span>
                )}

                {item.location && (
                  <span
                    className="ml-auto text-xs text-slate-400"
                    data-es={item.location.es}
                    data-en={item.location.en}
                  >
                    📍 {item.location.es}
                  </span>
                )}
              </div>

              {/* Título y empresa */}
              <h3
                className="mt-3 text-lg font-semibold text-slate-100"
                data-es={item.title.es}
                data-en={item.title.en}
              >
                {item.title.es}
              </h3>
              <p
                className="text-sm text-slate-300"
                data-es={item.company.es}
                data-en={item.company.en}
              >
                {item.company.es}
              </p>

              {item.summary && (
                <p
                  className="mt-3 text-sm text-slate-300/90"
                  data-es={item.summary.es}
                  data-en={item.summary.en}
                >
                  {item.summary.es}
                </p>
              )}

              {item.highlights && item.highlights.length > 0 && (
                <ul className="mt-4 flex flex-wrap gap-2">
                  {item.highlights.map((h, i) => (
                    <li
                      key={i}
                      className="rounded-full bg-slate-800/80 px-3 py-1 text-xs text-slate-200"
                      data-es={h.es}
                      data-en={h.en}
                    >
                      {h.es}
                    </li>
                  ))}
                </ul>
              )}

              {item.links && item.links.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-3">
                  {item.links.map((l, i) => (
                    <a
                      key={i}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1 text-sm text-blue-300 hover:text-blue-200"
                      data-es={l.label.es}
                      data-en={l.label.en}
                    >
                      {l.label.es}
                      <span className="transition-transform group-hover:translate-x-0.5">↗</span>
                    </a>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
