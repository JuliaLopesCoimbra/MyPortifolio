"use client";
import { useRouter } from "next/navigation";
export default function Chalenges() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-4 bg-black">
     <div className="absolute top-10 left-5 p-4 z-10">
        <button
          onClick={() => router.back()}
          className="text-gray-700 hover:text-purple-900"
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
        <div className="w-2/2 flex items-center justify-center mb-10">
          <img
            src="/avatar/tired.webp"
            alt="Avatar"
            className="max-w-xs rounded-full"
          />
        </div>
      </div>

      <h1 className="text-3xl font-bold text-white mb-2">Meus Desafios Atuais</h1>
      <p className="text-lg text-white mb-6 text-center max-w-2xl">
        A jornada está só começando, e esses são os próximos grandes passos que estou encarando com determinação e foco.
      </p>

      <div className="space-y-6 max-w-2xl w-full">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">🚀 Construção de um Sistema de Pedidos</h2>
          <p className="text-gray-700">
            Estou iniciando o desenvolvimento completo de um sistema de pedidos para um restaurante, abrangendo frontend, backend, integração com banco de dados, fluxo de pagamentos e gestão de pedidos em tempo real.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">🎓 Trabalho de Conclusão de Curso (TCC)</h2>
          <p className="text-gray-700">
            Meu TCC será a consolidação de todo o conhecimento adquirido na faculdade. Estou focado em entregar um projeto sólido, funcional e inovador, que agregue valor real.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">📚 Curso de Estrutura de Dados</h2>
          <p className="text-gray-700">
            Estou me aprofundando em estruturas de dados, um dos fundamentos essenciais da programação. Isso vai me ajudar a escrever códigos mais eficientes e performáticos.
          </p>
        </div>
      </div>
    </div>
  );
}
