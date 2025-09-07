// components/Educacion.tsx
type Item = {
  period: string;
  title: { es: string; en: string };
  school: { es: string; en: string };
  location?: { es: string; en: string };
  mode?: { es: string; en: string };        // Presencial / Online / Dual
  summary?: { es: string; en: string };     // Breve descripción
  highlights?: { es: string; en: string }[]; // Chips (asignaturas, tecnologías)
  links?: { label: { es: string; en: string }; href: string }[];
};

const EDUCATION: Item[] = [
  {
    period: "2018 — 2020",
    title: {
      es: "Grado medio en Sistemas Microinformáticos y Redes",
      en: "Intermediate Degree in Microcomputer Systems and Networks",
    },
    school: { es: "IES Hermanos Machado", en: "IES Hermanos Machado" },
    location: { es: "Sevilla, España", en: "Seville, Spain" },
    mode: { es: "Presencial", en: "On-site" },
    highlights: [
      { es: "Redes", en: "Networking" },
      { es: "Sistemas", en: "Systems" },
      { es: "Ofimatica", en: "Office automation" },
    ],
  },
  {
    period: "2020 — 2022",
    title: {
      es: "Desarrollo de aplicaciones multiplataforma",
      en: "Multiplatform Application Development",
    },
    school: { es: "IES Hermanos Machado", en: "IES Hermanos Machado" },
    location: { es: "Sevilla, España", en: "Seville, Spain" },
    mode: { es: "Presencial", en: "On-site" },
    highlights: [
      { es: "Java", en: "Java" },
      { es: "Android", en: "Android" },
      { es: "Bases de datos", en: "Databases" },
    ],
  },
  {
    period: "2024 — 2025",
    title: {
      es: "Grado de especialización en Inteligencia Artificial y Big Data",
      en: "Specialization Degree in Artificial Intelligence and Big Data",
    },
    school: { es: "IES Camas Antonio-Brisquet", en: "IES Camas Antonio-Brisquet" },
    location: { es: "Camas, Sevilla", en: "Camas, Seville" },
    mode: { es: "Presencial", en: "On-site" },
    highlights: [
      { es: "Python", en: "Python" },
      { es: "Machine Learning", en: "Machine Learning" },
      { es: "Big Data", en: "Big Data" },
    ],
  },
];

export default function Educacion() {
  return (
    <section
      id="educacion"
      className="relative mx-auto max-w-5xl px-6 py-24"
    >
      {/* Fondo sutil con patrón radial */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(251,146,60,0.08),transparent_70%)]" />

      <h2
        className="text-3xl font-semibold mb-12"
        data-es="Educación"
        data-en="Education"
      >
        Educación
      </h2>

      {/* Línea temporal */}
      <div className="relative pl-6">
        {/* Rail */}
        <div className="absolute left-0 top-0 h-full w-1 rounded-full bg-gradient-to-b from-blue-400/80 via-blue-400/30 to-transparent" />

        <div className="space-y-8">
          {EDUCATION.map((item, idx) => (
            <article
              key={idx}
              className="relative rounded-2xl ring-1 ring-slate-800/70 bg-slate-900/60 p-5 transition-transform duration-300 hover:translate-x-1 hover:shadow-lg hover:shadow-blue-400/10"
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

              {/* Título y centro */}
              <h3
                className="mt-3 text-lg font-semibold text-slate-100"
                data-es={item.title.es}
                data-en={item.title.en}
              >
                {item.title.es}
              </h3>
              <p
                className="text-sm text-slate-300"
                data-es={item.school.es}
                data-en={item.school.en}
              >
                {item.school.es}
              </p>

              {/* Resumen opcional */}
              {item.summary && (
                <p
                  className="mt-3 text-sm text-slate-300/90"
                  data-es={item.summary.es}
                  data-en={item.summary.en}
                >
                  {item.summary.es}
                </p>
              )}

              {/* Chips / asignaturas / tecnologías */}
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

              {/* Enlaces (certificados, plan de estudios, etc.) */}
              {item.links && item.links.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-3">
                  {item.links.map((l, i) => (
                    <a
                      key={i}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1 text-sm text-brand hover:text-brand"
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
