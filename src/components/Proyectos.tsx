import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import portfolioImg from "../assets/portfolio.png";
import privadoImg from "../assets/privado.png";

export type Project = {
  id: string;
  title_es: string;
  title_en: string;
  description_es: string;
  description_en: string;
  imageSrc?: string;
  tech: string[];
  year?: number;
  role_es?: string;
  role_en?: string;
  link?: string;
  repo?: string;
  isPrivate?: boolean;
  featured?: boolean;
};

const PROJECTS: Project[] = [
  {
    id: "portfolio",
    title_es: "🌐 Portfolio Personal",
    title_en: "🌐 Personal Portfolio",
    description_es:
      "Portfolio en React + Tailwind con animaciones, navegación fluida, diseño responsive y secciones de carrera, educación, proyectos, skills y contacto.",
    description_en:
      "React + Tailwind portfolio with animations, smooth navigation, responsive design and sections for career, education, projects, skills and contact.",
    imageSrc: portfolioImg,
    tech: ["React", "Tailwind", "TypeScript", "HTML", "CSS", "Git"],
    year: new Date().getFullYear(),
    role_es: "Desarrollador Frontend",
    role_en: "Frontend Developer",
    repo: "https://github.com/aday-ma/portafolio",
    featured: true,
  },
  {
    id: "freelance-1",
    title_es: "💼 Proyecto Freelance",
    title_en: "💼 Freelance Project",
    description_es:
      "Sitio web a medida para cliente: página de venta con sistema de logeo, compra totalmente funcional, correos y administración tanto de productos como de pedidos.",
    description_en:
      "Custom client website: sales page with login system, fully functional checkout, emails, and admin for products and orders.",
    imageSrc: privadoImg,
    tech: ["HTML", "CSS", "Javascript", "PHP"],
    year: new Date().getFullYear(),
    role_es: "Freelance",
    role_en: "Freelance",
    isPrivate: true,
  },
];

const cx = (...classes: (string | false | null | undefined)[]) =>
  classes.filter(Boolean).join(" ");

function ProjectCard({ p }: { p: Project }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ type: "spring", stiffness: 120, damping: 16 }}
      className="
        rounded-2xl overflow-hidden shadow
        bg-[rgb(var(--card))] ring-1 ring-[rgb(var(--card-ring))]
        transition-shadow hover:shadow-lg
      "
    >
      {/* Imagen */}
      <div className="relative w-full h-48 bg-[rgb(var(--card))]">
        {p.imageSrc ? (
          <img
            src={p.imageSrc}
            alt={`${p.title_es} / ${p.title_en} mockup`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        ) : null}

        {p.featured && (
          <span
            className="
              absolute top-3 left-3 rounded-full px-3 py-1 text-xs font-semibold
              bg-[rgb(var(--accent))] text-[rgb(var(--accent-fg))]
              ring-1 ring-transparent
            "
            data-es="Destacado"
            data-en="Featured"
          ></span>
        )}
      </div>

      {/* Contenido */}
      <div className="p-6">
        <h3
          className="text-xl font-semibold leading-tight text-[rgb(var(--fg))]"
          data-es={p.title_es}
          data-en={p.title_en}
        ></h3>

        <p
          className="mt-2 text-sm text-[rgb(var(--muted))]"
          data-es={p.description_es}
          data-en={p.description_en}
        ></p>

        {/* Tecnologías */}
        <div className="mt-3 flex flex-wrap gap-2">
          {p.tech.map((t) => (
            <span
              key={t}
              className="
                px-3 py-1 text-xs rounded-full
                bg-[rgb(var(--card))] ring-1 ring-[rgb(var(--card-ring))]
              "
            >
              {t}
            </span>
          ))}
        </div>

        {/* Año y rol */}
        <div className="mt-4 flex items-center gap-3 text-sm">
          {p.year && <span className="text-[rgb(var(--muted))]">{p.year}</span>}
          {p.role_es && p.role_en && (
            <span
              className="text-[rgb(var(--muted))]"
              data-es={`• ${p.role_es}`}
              data-en={`• ${p.role_en}`}
            ></span>
          )}
        </div>

        {/* Acciones */}
        <div className="mt-5 flex flex-wrap gap-3">
          {p.link && !p.isPrivate && (
            <a
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex items-center gap-2 rounded-xl px-4 py-2
                bg-[rgb(var(--accent))] text-[rgb(var(--accent-fg))]
                hover:opacity-90 transition
              "
              data-es="Ver demo"
              data-en="View demo"
            ></a>
          )}
          {p.repo && !p.isPrivate && (
            <a
              href={p.repo}
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex items-center gap-2 rounded-xl px-4 py-2
                ring-1 ring-[rgb(var(--card-ring))]
                hover:bg-[rgb(var(--card))]/60 transition
              "
              data-es="Ver código"
              data-en="View code"
            ></a>
          )}
          {p.isPrivate && (
            <span
              className="
                inline-flex items-center rounded-xl px-3 py-1 text-xs
                bg-[rgb(var(--card))] ring-1 ring-[rgb(var(--card-ring))]
                text-[rgb(var(--muted))]
              "
              data-es="Enlace privado"
              data-en="Private link"
            ></span>
          )}
        </div>
      </div>
    </motion.article>
  );
}

function ProjectsControls({
  allTech,
  active,
  onChange,
}: {
  allTech: string[];
  active: string | null;
  onChange: (t: string | null) => void;
}) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <button
        onClick={() => onChange(null)}
        className={cx(
          "px-3 py-1 text-xs rounded-full",
          active === null
            ? "bg-[rgb(var(--accent))] text-[rgb(var(--accent-fg))]"
            : "ring-1 ring-[rgb(var(--card-ring))] hover:bg-[rgb(var(--card))]/60"
        )}
        data-es="Todo"
        data-en="All"
      ></button>

      {allTech.map((t) => (
        <button
          key={t}
          onClick={() => onChange(active === t ? null : t)}
          className={cx(
            "px-3 py-1 text-xs rounded-full",
            active === t
              ? "bg-[rgb(var(--accent))] text-[rgb(var(--accent-fg))]"
              : "ring-1 ring-[rgb(var(--card-ring))] hover:bg-[rgb(var(--card))]/60"
          )}
        >
          {t}
        </button>
      ))}
    </div>
  );
}

export default function ProjectsSection({
  items = PROJECTS,
}: {
  items?: Project[];
}) {
  const [filter, setFilter] = useState<string | null>(null);

  const allTech = useMemo(() => {
    const set = new Set<string>();
    items.forEach((p) => p.tech.forEach((t) => set.add(t)));
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, [items]);

  const filtered = !filter ? items : items.filter((p) => p.tech.includes(filter));

  const ordered = [...filtered].sort((a, b) => {
    const feat = Number(Boolean(b.featured)) - Number(Boolean(a.featured));
    if (feat !== 0) return feat;
    return (b.year ?? 0) - (a.year ?? 0);
  });

  return (
    <section
      id="proyectos"
      className="px-6 py-16 bg-[rgb(var(--bg))] text-[rgb(var(--fg))] transition-colors"
    >
      <div className="max-w-6xl mx-auto">
        <header className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2
              className="text-3xl font-bold"
              data-es="Proyectos"
              data-en="Projects"
            ></h2>
            <p
              className="text-sm mt-1 text-[rgb(var(--muted))]"
              data-es="Mis proyectos, iré actualizando la sección a medida que vaya desarrollando nuevos."
              data-en="My projects — I’ll keep this section updated as I build new ones."
            ></p>
          </div>
          <ProjectsControls
            allTech={allTech}
            active={filter}
            onChange={setFilter}
          />
        </header>

        <motion.div
          layout
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 [grid-auto-rows:1fr]"
        >
          {ordered.map((p) => (
            <ProjectCard key={p.id} p={p} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
