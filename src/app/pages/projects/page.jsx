
"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import React from "react";
export default function Projects() {    
  const router = useRouter();
  const companies = [
    {
      name: "BRASKEM",
      id: 1,
      description: "Serviço utilizado para o evento Rock in Rio 2024",
      contracted: true,
    },
    {
      name: "DISNEY",
      id: 2,
      description: "",
      contracted: true,
    },
    {
      name: "RECRUTAMENTO",
      id: 3,
      description: "",
      contracted: true,
    },
    {
      name: "LOLLAPALOOZA",
      id: 4,
      description: "Loja de moda e vestuário",
      contracted: true,
    },
    {
      name: "DASHBOARD_WORLD",
      id: 5,
      description: "Moda e acessórios internacionais",
      contracted: true,
    },
    {
      name: "BAHIA",
      id: 6,
      description: "Vestuário e casa",
      contracted: true,
    },
    {
      name: "IC",
      id: 6,
      description: "Vestuário e casa",
      contracted: true,
    },
  ];
  const handleClick = (company) => {
    if (!company.contracted) return; // Não faz nada se a empresa não estiver contratada
    router.push(`projects/${company.name}`);

  };

  return (
    <div className="bg-white">
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
      <div className="relative overflow-hidden bg-white">
        <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg mb-10">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Projetos
              </h1>
              <p className="mt-4 text-xl text-gray-500 ">
                Aqui estão alguns dos meus projetos mais recentes.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {companies.map((company, index) => (
                <motion.div
                  key={company.id}
                  className={`bg-cover bg-center relative overflow-hidden cursor-pointer ${
                    company.contracted ? "" : "opacity-50 cursor-not-allowed"
                  }`}
                  onClick={() => handleClick(company)}
                  style={{
                    borderRadius: "8px",
                    padding: "1rem",
                    maxWidth: "480px",
                    height: "22vh",
                    backgroundImage: `url('/img/projects/${company.name}.jpg')`,
                    transition:
                      "transform .3s ease-in-out, filter .3s ease-in-out",
                  }}
                  onMouseOver={(e) =>
                    company.contracted &&
                    ((e.currentTarget.style.filter = "brightness(50%)"),
                    (e.currentTarget.style.transform = "scale(1.05)"))
                  }
                  onMouseOut={(e) =>
                    company.contracted &&
                    ((e.currentTarget.style.filter = "brightness(100%)"),
                    (e.currentTarget.style.transform = "scale(1)"))
                  }
                  initial={{ opacity: 0, y: 30 }} // Inicia invisível e levemente deslocado para baixo
                  animate={{ opacity: 1, y: 0 }} // Anima para visível e posição original
                  transition={{ duration: 0.5, delay: index * 0.2 }} // Efeito sequencial
                >
                  {!company.contracted && (
                    <div
                      className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white text-xl"
                      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
                    >
                      Contratar
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
