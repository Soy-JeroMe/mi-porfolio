import React from "react";

const projects = [
  {
    title: "Wallet App",
    description:
      "Aplicación de control financiero personal con autenticación, gráficas y gestión de gastos.",
    technologies: ["React", "TailwindCSS", "Vite"],
    link: "https://wallet-app-eosin.vercel.app/",
  },
  {
    title: "Gestor de Tareas",
    description: "App web tipo To-Do con filtros, prioridad y guardado local.",
    technologies: ["React", "Vite", "LocalStorage"],
    link: "#",
  },
  {
    title: "Landing de Agencia Creativa",
    description:
      "Landing page responsiva para una agencia ficticia, con animaciones y diseño moderno.",
    technologies: ["Astro", "TailwindCSS", "JavaScript"],
    link: "#",
  },
];

const Projects = () => {
  return (
    <section className="py-16 px-6 bg-gray-100" id="proyectos">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Proyectos</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl p-6 text-left hover:shadow-lg transition"
            >
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <p className="text-sm text-gray-500 mb-2">
                <strong>Tecnologías:</strong> {project.technologies.join(", ")}
              </p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  className="text-blue-600 hover:underline text-sm"
                >
                  Ver proyecto →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
