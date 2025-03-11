"use client";
import { useRouter } from "next/navigation"; // Para navegação no Next.js

export default function Education() {
  const router = useRouter();
  return (
    <div className="bg-gray-100  sm:py-8">
      <div className="absolute top-10 left-10 p-4 z-10" >
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
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8" >
        <h2 className="text-center text-base/7 font-semibold text-indigo-600">
          my knowledge
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-gray-950 sm:text-5xl">
          Minha jornada de aprendizado
        </p>
        <div className="flex justify-center items-center relative z-10">
          <div className="w-2/2 flex items-center justify-center">
            <img
              src="/avatar/sou1.webp"
              alt="Your Name"
              className="max-w-xs rounded-full"
            />
          </div>
        </div>

        <div
          className="mt-10 grid  sm:mt-16 lg:grid-cols-2 lg:grid-rows-1 relative bg-cover bg-center "
          style={{ backgroundImage: "url('/img/escola.jpg')",  }} 
        >
          <div className="absolute inset-0  rounded-2xl"></div>

          <div className="relative max-lg:row-start-1" >
            <div className="absolute inset-px rounded-lg bg-gray-900 bg-opacity-60 max-lg:rounded-t-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]" >
              {/* Bloco da ETEC - Doutor Júlio Cardoso */}
              <div className="px-8 py-6" >
                <h2 className="text-2xl font-semibold text-white-700">
                  ETEC - Doutor Júlio Cardoso
                </h2>
                <p className="mt-2 text-white leading-relaxed">
                  Minha meta era passar no vestibular da ETEC, cursar o ensino
                  médio com qualidade e me formar já com um curso técnico
                  integrado.
                </p>
              </div>

              {/* Bloco do Ensino */}
              <div className="px-8 pt-5 sm:px-10 sm:pt-5" >
                <p className="mt-2 text-2xl font-medium tracking-tight text-white max-lg:text-center">
                  Ensino
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-white text-gray-200 max-lg:text-center pb-5">
                  Lá, pude aprender as disciplinas fundamentais do ensino médio,
                  como Ciências Humanas, Ciências Exatas e Literatura, que
                  contribuíram para a minha formação intelectual e cultural.
                  Além disso, desenvolvi habilidades em Linguagens, aprimorando
                  minha capacidade de comunicação, interpretação de textos e
                  expressão escrita. Esse aprendizado não apenas fortaleceu
                  minha base acadêmica, mas também ampliou minha visão de mundo,
                  estimulando o pensamento crítico e a análise aprofundada dos
                  diversos temas abordados ao longo do curso.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-t-[2rem]"></div>
          </div>

  

          <div className="relative lg:row-span-1" >
            <div className="absolute inset-px rounded-lg bg-gray-900 bg-opacity-60 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]"
            >
              <div className="px-8 pt-5 pb-3 sm:px-10 sm:pt-5 sm:pb-0 text-white">
              <p className="mt-2 text-2xl font-medium tracking-tight text-white max-lg:text-center">
                  Meu primeiro contato com a programação foi no ensino médio{" "}
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-200 max-lg:text-center">
                  Aprendi a programar em C e C++, JAVA, Xamarin, CSharp e a
                  criar sites com HTML e CSS
                </p>
                <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">
                  Aprendizado com o curso
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-200 max-lg:text-center">
                  Aqui está a lista com as matérias relacionadas ao Curso
                  Técnico de Desenvolvimento de Sistemas:
                </p>
              </div>
              <div className="relative min-h-[30rem] w-full grow">
                <div className="absolute top-10 right-0 bottom-0 left-10 overflow-hidden rounded-tl-xl bg-gray-700 shadow-2xl">
                  <div className="flex bg-gray-600/40 ring-1 ring-white/5">
                    <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                      <div className="border-r border-b border-r-white/10 border-b-white/20 bg-white/5 px-4 py-2 text-white">
                        Subjects.jsx
                      </div>
                    </div>
                  </div>
                  <div className="px-6 pt-6 pb-14 space-y-6 text-white">
                    <p>Programação em Java</p>
                    <p>Redes de Computadores</p>
                    <p>Sistemas Embarcados</p>
                    <p>Interação Humano-Computador (IHC)</p>
                    <p>Programação Web (JavaScript, HTML e CSS)</p>
                    <p>Design Gráfico</p>
                    <p>Testes de Software e Qualidade</p>
                    <p>Banco de Dados</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
          </div>
        </div>

        
        <div
        className="relative bg-cover bg-center"
        style={{ backgroundImage: "url('/img/facef.jpg')", border:"solid red 1px" }}
      >
        <div className="absolute inset-0 bg-white/30 blur-lg"></div>
        <div className="relative">
          oi
        </div>
      </div>
        

      </div>
    </div>
  );
}
