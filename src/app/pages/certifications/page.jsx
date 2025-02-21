"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Para navegação no Next.js

const certifications = [
  {
    title: "Escultura Digital com Blender",
    image: "/certifications/programming/reactProject.jpg",
    type: "Java",
    description: "Nesse curso",
  },
  {
    title: "React Avançado",
    image: "/certifications/programming/oracleData.jpg",
    type: "React",
    description: "Esse foi um dos cursos em que mais adquiri conhecimento em desenvolvimento full stack. Nele, consegui criar um sistema para uma pizzaria, abrangendo todo o fluxo necessário para o restaurante, desde o garçom realizando o pedido pelo celular até a cozinha recebê-lo e notificar quando estiver pronto.",
  },
  {
    title: "Desenvolvimento de Jogos com Unity",
    image: "/certifications/programming/oracleCloud.jpg",
    type: "Estrutura de Dados",
    description: "aaa",
  },
  {
    title: "Escultura Digital com Blender",
    image: "/certifications/programming/maratonaProgramacao.jpg",
    type: "Java",
    description: "Nesse curso",
  },
  {
    title: "React Avançado",
    image: "/certifications/programming/java.jpg",
    type: "React",
    description: "Esse foi um dos cursos em que mais adquiri conhecimento em desenvolvimento full stack. Nele, consegui criar um sistema para uma pizzaria, abrangendo todo o fluxo necessário para o restaurante, desde o garçom realizando o pedido pelo celular até a cozinha recebê-lo e notificar quando estiver pronto.",
  },
  {
    title: "Desenvolvimento de Jogos com Unity",
    image: "/certifications/programming/hackathon2024.jpg",
    type: "Estrutura de Dados",
    description: "aaa",
  },
  {
    title: "Desenvolvimento de Jogos com Unity",
    image: "/certifications/programming/eventoLattes.jpg",
    type: "Estrutura de Dados",
    description: "aaa",
  },
];

// Função para agrupar os certificados por tipo
const groupByType = (certs) => {
  return certs.reduce((acc, cert) => {
    acc[cert.type] = acc[cert.type] || [];
    acc[cert.type].push(cert);
    return acc;
  }, {});
};

export default function Certifications() {
  const router = useRouter();
  const [certificationsCloud, setCertificationsCloud] = useState([]);
  const groupedCertifications = groupByType(certifications);

  // Buscar imagens da API
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("/api/list_certificates_google");
        const images = await response.json();
        setCertificationsCloud(images.map(img => ({ title: img.split("/").pop(), image: img, type: "Google Cloud" })));
      } catch (error) {
        console.error("Erro ao buscar certificados:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="relative min-h-screen bg-blue-300 flex flex-col items-center py-10 px-4 ">
        <div className="absolute top-0 left-0 w-full h-1/4 bg-white z-10">
  <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 320">
    <path fill="#2563EB" d="M0,224L60,208C120,192,240,160,360,154.7C480,149,600,171,720,186.7C840,203,960,213,1080,208C1200,203,1320,181,1380,170.7L1440,160V320H0Z"></path>
  </svg>
</div>
    <div className="absolute top-0 left-0 w-full h-1/2 bg-blue-300 z-0">
  <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 320">
    <path fill="#2563EB" d="M0,224L60,208C120,192,240,160,360,154.7C480,149,600,171,720,186.7C840,203,960,213,1080,208C1200,203,1320,181,1380,170.7L1440,160V320H0Z"></path>
  </svg>
</div>


      <div className="absolute left-0 top-0 flex justify-center items-center z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="yellow"
          className="w-[500px] h-[500px]"
        >
          <path d="M12 2L14 6L18 7L14 8L12 12L10 8L6 7L10 6L12 2Z" />
          <path d="M12 14L14 18L18 19L14 20L12 22L10 20L6 19L10 18L12 14Z" />
          <path d="M2 12H6V14H2V12ZM18 12H22V14H18V12Z" />
          <path
            d="M4 4L6 6M18 18L20 20M4 20L6 18M18 6L20 4"
            stroke="yellow"
            strokeWidth="2"
          />
        </svg>
      </div>

      <div className="absolute right-0 top-1 flex justify-center items-center z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="yellow"
          className="w-[500px] h-[500px]"
        >
          <path d="M12 2L14 6L18 7L14 8L12 12L10 8L6 7L10 6L12 2Z" />
          <path d="M12 14L14 18L18 19L14 20L12 22L10 20L6 19L10 18L12 14Z" />
          <path d="M2 12H6V14H2V12ZM18 12H22V14H18V12Z" />
          <path
            d="M4 4L6 6M18 18L20 20M4 20L6 18M18 6L20 4"
            stroke="yellow"
            strokeWidth="2"
          />
        </svg>
      </div>
      <div className="absolute top-10 left-10 p-4 z-10">
        <button
          onClick={() => router.back()}
          className="text-gray-700 hover:text-gray-900"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      </div>

      <div className="flex justify-center items-center relative z-10">
        <div className="w-2/2 flex items-center justify-center">
          <img
            src="/avatar/euTubarao.webp"
            alt="Your Name"
            className="max-w-full rounded-full"
          />
        </div>
      </div>

      <div className="w-1/2 text-center text-black p-1 rounded m-10 z-10">
        <p className="text-5xl font-bold drop-shadow-lg">Certificados</p>
        <p className="drop-shadow-lg">
          Esses são os certificados que adquiri ao longo da minha jornada como
          desenvolvedora
        </p>
      </div>

      {/* Exibir certificados gerais agrupados por tipo */}
      <div
        className="w-full max-w-4xl z-10"
        // style={{ border: "1px solid red" }}
      >
        {Object.entries(groupedCertifications).map(([type, certs]) => (
          <div key={type} className="mb-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 z-10">
              {certs.map((cert, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg flex flex-col items-center"
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="h-40 w-full object-cover rounded-md"
                  />
                  <div className="text-gray-700"> {cert.description}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="absolute   flex justify-center items-center z-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="yellow"
          className="w-24 h-24 text-yellow-500"
        >
          <path d="M12 2L14 6L18 7L14 8L12 12L10 8L6 7L10 6L12 2ZM12 14L14 18L18 19L14 20L12 22L10 20L6 19L10 18L12 14ZM4 4L6 6M18 18L20 20M4 20L6 18M18 6L20 4" />
        </svg>
      </div>
      {/* Exibir certificados do Google Cloud agrupados por tipo */}
      <div className="w-full max-w-4xl z-10eventoLattes">
      <h2 className="text-2xl font-bold text-gray-800 capitalize mb-4">
        Certificados Google Cloud
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificationsCloud.map((cert, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg flex flex-col items-center">
            <img src={cert.image} alt={cert.title} className="h-80 w-full object-cover rounded-md" />
           
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}
