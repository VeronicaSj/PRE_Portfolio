// src/components/Skills.tsx
import { useEffect, useState } from "react";

type Skill = {
  name: string;
  level: number; // porcentaje 0-100
};

type CardProps = {
  title: string;
  skills: Skill[];
};

function SkillBar({ skill }: { skill: Skill }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => setWidth(skill.level), 300);
    return () => clearTimeout(timeout);
  }, [skill.level]);

  return (
    <div className="mb-3">
      <div className="flex justify-between text-sm mb-1">
        <span className="text-[rgb(var(--fg))]">{skill.name}</span>
        <span className="text-[rgb(var(--muted))]">{skill.level}%</span>
      </div>

      {/* Track */}
      <div className="w-full rounded-xl h-3 overflow-hidden bg-[rgb(var(--card-ring))]/40">
        {/* Fill */}
        <div
          className="h-3 rounded-xl transition-all duration-700 ease-out bg-[rgb(var(--accent))]"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

function SkillCard({ title, skills }: CardProps) {
  return (
    <div className="
      w-full md:w-1/3
      rounded-2xl p-6 shadow
      bg-[rgb(var(--card))] ring-1 ring-[rgb(var(--card-ring))]
      transition-colors
    ">
      <h3 className="text-xl font-semibold mb-4 text-center text-[rgb(var(--fg))]">
        {title}
      </h3>
      {skills.map((s) => (
        <SkillBar key={s.name} skill={s} />
      ))}
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="px-6 py-16 bg-[rgb(var(--bg))] text-[rgb(var(--fg))] transition-colors"
    >
      <h2
        className="text-3xl font-bold text-center mb-10"
        data-es="Habilidades"
        data-en="Skills"
      >
        Skills
      </h2>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Frontend */}
        <SkillCard
          title="Frontend"
          skills={[
            { name: "HTML", level: 95 },
            { name: "CSS", level: 75 },
            { name: "JavaScript", level: 75 },
            { name: "React", level: 85 },
            { name: "Angular", level: 70 },
            { name: "Typescript", level: 70 },
          ]}
        />

        {/* Backend */}
        <SkillCard
          title="Backend"
          skills={[
            { name: "Spring Boot", level: 75 },
            { name: "PHP", level: 85 },
            { name: "Python", level: 95 },
            { name: "Java", level: 90 },
            { name: "MySQL", level: 80 },
            { name: "MariaDB", level: 65 },
            { name: "MongoDB", level: 75 },
          ]}
        />

        {/* Otros */}
        <SkillCard
          title="Otros"
          skills={[
            { name: "Salesforce (Apex, Aura...)", level: 80 },
            { name: "Machine Learning", level: 80 },
            { name: "Docker", level: 60 },
            { name: "Git", level: 80 },
            { name: "C", level: 60 },
          ]}
        />
      </div>
    </section>
  );
}
