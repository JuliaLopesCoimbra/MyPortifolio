"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Para navegação no Next.js

const certifications = [
  {
    title: "",
    image: "/certifications/programming/reactProject.jpg",
    type: "Java",
    description:
      "No contexto de um curso intensivo de desenvolvimento full stack, tive a oportunidade de realizar um projeto: a criação de um sistema integrado para uma pizzaria. O objetivo era otimizar o processo de pedidos e entrega, melhorando a comunicação entre os garçons e a equipe de cozinha. Utilizei React Native para desenvolver o aplicativo utilizado pelos garçons. Este aplicativo permitia que eles registrassem os pedidos dos clientes de forma rápida e eficiente, enviando-os diretamente para um dashboard operado pela cozinha, desenvolvido em React. O dashboard exibia os pedidos em tempo real, permitindo que a equipe de cozinha gerenciasse de maneira eficaz as demandas e informasse quando os pratos estavam prontos para serem servidos. No backend, optei por Node.js para gerenciar a lógica de negócios e a comunicação entre o frontend e o banco de dados. Esta escolha foi crucial para garantir uma transmissão de dados rápida e segura. Para o gerenciamento dos dados, implementei um banco de dados usando Postbird, acessado através da plataforma Beekeeper. Essa configuração foi essencial para manter a organização dos dados de pedidos e a eficiência operacional do sistema.",
  },
  {
    title: "",
    image: "/certifications/programming/oracleData.jpg",
    type: "React",
    description:
      "Ao longo do segundo semestre de 2024, mergulhei profundamente nos conceitos e práticas essenciais de SQL e PL/SQL, explorando as capacidades avançadas do Oracle Database. O curso abordou desde a criação e gestão de bancos de dados até técnicas sofisticadas de manipulação e recuperação de dados, preparando-me para enfrentar problemas reais de banco de dados com eficiência e confiança.",
  },

  {
    title: "",
    image: "/certifications/programming/maratonaProgramacao.jpg",
    type: "Java",
    description:
      "A maratona consistiu em uma série de problemas de programação que variavam em dificuldade, abrangendo algoritmos, estruturas de dados, matemática e lógica. Cada desafio tinha como objetivo testar nossa capacidade de pensar de forma crítica e desenvolver soluções eficientes em um curto período de tempo.",
  },
  {
    title: "",
    image: "/certifications/programming/java.jpg",
    type: "React",
    description:
      "Durante o curso, explorei extensivamente os fundamentos de JAVA, incluindo sintaxe, controle de fluxo, orientação a objetos, e manipulação de exceções. A metodologia de ensino da Rocketseat, focada em prática e aplicação real, permitiu que eu não apenas aprendesse a teoria, mas também aplicasse o conhecimento em projetos práticos e desafios de codificação.",
  },
  {
    title: "",
    image: "/certifications/programming/hackathon2024.jpg",
    type: "Estrutura de Dados",
    description:
      "Tive o privilégio de participar do Hackathon de 2024 organizado pelo Centro Universitário de Franca - UNIFACEF, um evento que reuniu mentes criativas para solucionar desafios contemporâneos usando a tecnologia. O tema do nosso projeto foi particularmente inovador e desafiador: como auxiliar o usuário a medir sua felicidade e orientá-lo sobre práticas que ajudem na sensação de felicidade.Nosso objetivo era criar uma ferramenta capaz de coletar dados relevantes sobre o bem-estar e a felicidade das pessoas, incorporando variáveis socioeconômicas que pudessem influenciar esses indicadores. O questionário foi projetado para ser intuitivo e acessível, facilitando a participação de uma ampla demografia.Utilizamos tecnologias avançadas para garantir a análise precisa dos dados coletados, empregando algoritmos de inteligência artificial para interpretar as respostas e gerar insights significativos. A plataforma foi desenvolvida com a intenção de ser adquirida e utilizada por instituições de saúde, que poderiam empregar essas informações para fomentar crescimento científico e desenvolver políticas mais eficazes voltadas à saúde mental e bem-estar da população.Trabalhar em equipe sob a pressão de um hackathon foi uma experiência intensamente gratificante e educativa. A colaboração entre os membros da equipe foi fundamental para moldar nossa solução final, combinando conhecimento técnico com perspectivas criativas para abordar o desafio de forma holística.",
  },
  {
    title: "",
    image: "/certifications/programming/eventoLattes.jpg",
    type: "Estrutura de Dados",
    description:
      "O workshop focou em estratégias eficazes para estruturar e destacar informações no Currículo Lattes, uma ferramenta indispensável para acadêmicos, cientistas e estudantes no Brasil. Aprendi a organizar minhas qualificações, projetos de pesquisa, publicações e participações em congressos de maneira que reflita verdadeiramente meu percurso acadêmico e minhas contribuições para a área de conhecimento",
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
  const [showHeader, setShowHeader] = useState(false);
  const [certificationsCloud, setCertificationsCloud] = useState([]);
  const groupedCertifications = groupByType(certifications);
  // Buscar imagens da API
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("/api/list_certificates_google");
        const images = await response.json();
        setCertificationsCloud(
          images.map((img) => ({
            title: img.split("/").pop(),
            image: img,
            type: "Google Cloud",
          }))
        );
      } catch (error) {
        console.error("Erro ao buscar certificados:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="relative min-h-screen bg-white flex flex-col items-center  px-4 ">
      {/* <Header showHeader={showHeader}/> */}
      <div className="absolute top-0 left-0 w-full h-[900px] bg-white z-10">
        <svg className="absolute  bottom-0 w-full" viewBox="0 0 1440 320">
          <path
            fill="#2563EB"
            d="M0,224L60,208C120,192,240,160,360,154.7C480,149,600,171,720,186.7C840,203,960,213,1080,208C1200,203,1320,181,1380,170.7L1440,160V320H0Z"
          ></path>
        </svg>
      </div>
      <div className="absolute left-0 top-0 flex justify-center items-center z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="yellow"
          className="w-[500px] h-[900px]"
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
          className="w-[500px] h-[900px]"
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
                    className="h-100 w-full object-cover rounded-md"
                  />
                  <div className="p-4 text-center text-gray-700">
                    <h3 className="font-semibold text-lg">{cert.title}</h3>
                    <p className="text-sm">{cert.description}</p>
                  </div>
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
      <div className="w-full max-w-4xl z-10 eventoLattes">
        <h2 className="text-2xl font-bold text-gray-800 capitalize mb-4 text-center">
          Certificados Google Cloud
        </h2>
        <p className="text-lg text-gray-600 text-center mb-6">
          Atualmente, sou DIAMOND no Google Cloud, um nível que reconhece
          minha dedicação na plataforma.
        </p>
        <div className="flex justify-center items-center mb-6">
          <div className="bg-white rounded-lg shadow-lg flex flex-col items-center p-4">
            <img
              src="/certifications/others/profile_google.png"
              className="h-80 w-80 object-cover rounded-full"
              alt="Perfil Google Cloud"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsCloud.map((cert, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg flex flex-col items-center"
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="h-80 w-full object-cover rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
