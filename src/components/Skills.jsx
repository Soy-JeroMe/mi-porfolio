import React from "react";
import {
  FaReact,
  FaCss3Alt,
  FaHtml5,
  FaJs,
  FaDatabase,
  FaGit,
  FaNode,
  FaVuejs,
  FaSass,
  FaFigma,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiAstro,
  SiGraphql,
  SiMongodb,
} from "react-icons/si";

const skills = [
  { icon: <FaReact size={40} />, name: "React", level: "Avanzado" },
  { icon: <FaHtml5 size={40} />, name: "HTML", level: "Avanzado" },
  { icon: <FaCss3Alt size={40} />, name: "CSS", level: "Avanzado" },
  { icon: <FaJs size={40} />, name: "JavaScript", level: "Avanzado" },
  { icon: <FaDatabase size={40} />, name: "SQL", level: "Intermedio" },
  { icon: <FaGit size={40} />, name: "Git", level: "Avanzado" },
  { icon: <FaNode size={40} />, name: "Node.js", level: "Intermedio" },
  { icon: <SiTypescript size={40} />, name: "TypeScript", level: "Intermedio" },
  // { icon: <SiNextdotjs size={40} />, name: "Next.js", level: "Intermedio" },
  { icon: <SiAstro size={40} />, name: "Astro", level: "Intermedio" },
  // { icon: <FaVuejs size={40} />, name: "Vue.js", level: "Básico" },
  // { icon: <SiGraphql size={40} />, name: "GraphQL", level: "Básico" },
  // { icon: <FaSass size={40} />, name: "Sass", level: "Intermedio" },
  // { icon: <FaFigma size={40} />, name: "Figma", level: "Básico" },
  { icon: <SiMongodb size={40} />, name: "MongoDB", level: "Básico" },
];

const Skills = () => {
  return (
    <section className="py-16 px-6 bg-gray-100" id="habilidades">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Habilidades</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="p-4 bg-white rounded-full shadow-lg mb-4">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold">{skill.name}</h3>
              <p className="text-sm text-gray-600">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
