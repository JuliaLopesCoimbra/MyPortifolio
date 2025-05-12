"use client";
import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation"; // Para navegação no Next.js

const experiences = [
    {
        company: "PICBRAND",
        role: "Full Stack Developer",
        duration: "março 2025 - atualmente",
        description:
          "Responsável pelo desenvolvimento de aplicações completas para os eventos da empresa, incluindo a criação de componentes front-end, estruturação de back-end com banco de dados, hospedagem em serviços em nuvem e implementação de soluções com inteligência artificial baseadas em MediaPipe.",
      },
      
      {
        company: "Ib System / Lote Mobile",
        role: "Dev Frontend Júnior",
        duration: "setembro 2024 - março 2025",
        description:
          "Atuação como desenvolvedor front-end na construção de aplicações do zero voltadas para o sistema de loteamento. Fui responsável por desenvolver um aplicativo completo, integrando funcionalidades específicas para clientes, corretores e administradores, totalmente alinhado ao sistema principal da empresa.",
      },
      
      {
        company: "Ib System / Lote Mobile",
        role: "Suporte de T.I",
        duration: "julho 2024 - setembro 2024",
        description:
          "Primeira experiência profissional na área de T.I, prestando suporte técnico direto aos clientes da empresa via chamadas (call), solucionando bugs, realizando manutenções e desenvolvendo personalizações sob demanda. ",
      },
      
];

export default function Professional() {
      const router = useRouter();
    
  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-white px-4 py-10">
         <div className="absolute top-10 left-0 p-4 ">
        <button
          onClick={() => router.back()}
          className="text-gray-700 hover:text-purple-500"
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
      <motion.h1
        className="text-4xl font-bold text-gray-800 mb-10 flex items-center gap-2"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Briefcase className="text-purple-600 w-8 h-8" />
        Minha Jornada Profissional
      </motion.h1>
      <div className="flex justify-center items-center relative z-10">
          <div className="w-2/2 flex items-center justify-center mb-10">
            <img
              src="/avatar/estrelas.webp"
              alt="Your Name"
              className="max-w-xs rounded-full"
            />
          </div>
        </div>

      <div className="relative border-l-4 border-purple-300 pl-6 space-y-12 max-w-2xl w-full">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="absolute -left-[22px] w-4 h-4 bg-purple-600 rounded-full border-4 border-white" />
            <h3 className="text-xl font-semibold text-gray-800">
              {exp.role} @ {exp.company}
            </h3>
            <p className="text-sm text-purple-600 font-medium">{exp.duration}</p>
            <p className="mt-2 text-gray-600">{exp.description}</p>
          </motion.div>
        ))}
      </div>

   
    </div>
  );
}
