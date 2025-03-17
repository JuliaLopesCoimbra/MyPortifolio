import React from "react";
import { FaInstagram, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
export default function Contact() {
  return (
    <div className="bg-white relative">
      {/* Camada do SVG de fundo */}
      <div className="absolute inset-0 z-[10] overflow-hidden h-full w-full">
        <svg
          className="absolute left-[50%] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="grid-pattern"
              width={200}
              height={200}
              x="50%"
              y={0}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V0 M0 0H200" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#grid-pattern)" />
        </svg>
      </div>

      <div className="relative overflow-hidden bg-white">
  <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
    <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">

      {/* Container Flexível para alinhar os itens lado a lado */}
      <div className="flex items-center justify-center space-x-10">

        {/* Imagem */}
        <div className="relative w-80 h-160 bg-black rounded-3xl border-8 border-gray-900 shadow-lg overflow-hidden flex items-center justify-center z-[10]">
          <img
            src="/img/euFacef.jpeg"
            alt="Your Name"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-4 bg-gray-900 rounded-b-lg"></div>
        </div>

       
        

<div className="max-w-lg z-[10]">
  <a href="/">
    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
      Entre em contato
    </h1>
  </a>
  <p className="mt-4 text-xl text-gray-500">
    Dê uma olhada em minhas redes sociais
  </p>

  {/* Ícones das Redes Sociais */}
  <div className="mt-6 flex space-x-6">
    <a href="https://www.instagram.com/seu_instagram" target="_blank" rel="noopener noreferrer">
      <FaInstagram className="w-8 h-8 text-gray-600 hover:text-red-500 transition duration-300" />
    </a>
    <a href="https://www.linkedin.com/in/seu_linkedin" target="_blank" rel="noopener noreferrer">
      <FaLinkedin className="w-8 h-8 text-gray-600 hover:text-blue-600 transition duration-300" />
    </a>
    <a href="https://github.com/seu_github" target="_blank" rel="noopener noreferrer">
      <FaGithub className="w-8 h-8 text-gray-600 hover:text-black transition duration-300" />
    </a>
    <a href="https://wa.me/seu_numero" target="_blank" rel="noopener noreferrer">
      <FaWhatsapp className="w-8 h-8 text-gray-600 hover:text-green-500 transition duration-300" />
    </a>
  </div>
</div>


      </div>
    </div>
  </div>
</div>

    </div>
  );
}
