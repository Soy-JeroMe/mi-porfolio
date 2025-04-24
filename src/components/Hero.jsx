import React from "react";
const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gray-100">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Hola, soy Jerónimo 👋
      </h1>
      <p className="text-xl md:text-2xl text-gray-700 mb-6">
        Desarrollador Frontend especializado en React, HTML, CSS y JavaScript.
      </p>
      <a
        href="#proyectos"
        className="bg-blue-600 text-white px-6 py-3 rounded-2xl text-lg hover:bg-blue-700 transition"
      >
        Ver mis proyectos
      </a>
    </section>
  );
};

export default Hero;
