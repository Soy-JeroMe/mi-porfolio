import React from "react";

const About = () => {
  return (
    <section className="py-16 px-6 bg-white text-gray-800" id="sobre-mi">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Sobre mí</h2>
        <p className="text-lg leading-relaxed">
          Soy Jerónimo Orozco, un desarrollador Frontend apasionado por crear
          experiencias web modernas, rápidas y accesibles. Me encanta trabajar
          con tecnologías como <strong>React</strong>,{" "}
          <strong>TailwindCSS</strong> y <strong>Astro</strong>.
        </p>
        <p className="mt-4 text-lg leading-relaxed">
          He creado varios proyectos personales donde combino diseño minimalista
          con código limpio. Siempre busco aprender nuevas herramientas y
          mejorar como profesional.
        </p>
      </div>
    </section>
  );
};

export default About;
