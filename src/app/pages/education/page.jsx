"use client";
import { useRouter } from "next/navigation";

export default function Education() {
  const router = useRouter();
  return (
    <div className="bg-gray-100  sm:py-8">
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
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
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
  className="mt-10 grid sm:mt-16 lg:grid-cols-2 lg:grid-rows-1 relative bg-cover bg-center"
  style={{ backgroundImage: "url('/img/escola.jpg')" }}
>
  <div className="relative max-lg:row-start-1 m-0 p-0" >
    <div className="absolute inset-0 bg-gray-900 bg-opacity-60 max-lg:rounded-t-[2rem]"></div>
    <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
      <div className="px-8 py-6">
        <h2 className="text-2xl font-semibold text-white-700">ETEC - Doutor Júlio Cardoso</h2>
        <p className="mt-2 text-white leading-relaxed">
          Minha meta era passar no vestibular da ETEC, cursar o ensino médio com qualidade e me formar já com um curso técnico integrado.
        </p>
      </div>

      <div className="px-8 pt-5 sm:px-10 sm:pt-5">
        <p className="mt-2 text-2xl font-medium tracking-tight text-white max-lg:text-center">Ensino</p>
        <p className="mt-2 max-w-lg text-sm/6 text-white text-gray-200 max-lg:text-center pb-5">
          Lá, pude aprender as disciplinas fundamentais do ensino médio, como Ciências Humanas, Ciências Exatas e Literatura, que contribuíram para a minha formação intelectual e cultural. Além disso, desenvolvi habilidades em Linguagens, aprimorando minha capacidade de comunicação, interpretação de textos e expressão escrita. Esse aprendizado não apenas fortaleceu minha base acadêmica, mas também ampliou minha visão de mundo, estimulando o pensamento crítico e a análise aprofundada dos diversos temas abordados ao longo do curso.
        </p>
      </div>

      <div className="px-8 pt-5 sm:px-10 sm:pt-5">
        <p className="mt-2 text-2xl font-medium tracking-tight text-white max-lg:text-center">Experiência Prática</p>
        <p className="mt-2 max-w-lg text-sm/6 text-white text-gray-200 max-lg:text-center pb-5">
          Durante minha trajetória, tive a oportunidade de aplicar meus conhecimentos em projetos práticos, explorando soluções inovadoras para desafios do mundo real. Essa experiência me permitiu desenvolver habilidades analíticas, resolver problemas complexos e trabalhar em equipe, preparando-me para os desafios do mercado de trabalho e ampliando minha perspectiva profissional.
        </p>
      </div>
    </div>
    <div className="pointer-events-none absolute inset-0 ring-1 shadow-sm ring-black/5"></div>
  </div>

  <div className="relative lg:row-span-1 m-0 p-0" >
    <div className="absolute inset-0 bg-gray-900 bg-opacity-60"></div>
    <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
      <div className="px-8 pt-5 pb-3 sm:px-10 sm:pt-5 sm:pb-0 text-white">
        <p className="mt-2 text-2xl font-medium tracking-tight text-white max-lg:text-center">
          Meu primeiro contato com a programação foi no ensino médio
        </p>
        <p className="mt-2 max-w-lg text-sm/6 text-gray-200 max-lg:text-center">
          Aprendi a programar em C e C++, JAVA, Xamarin, CSharp e a criar sites com HTML e CSS
        </p>
        <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">Aprendizado com o curso</p>
        <p className="mt-2 max-w-lg text-sm/6 text-gray-200 max-lg:text-center">
          Aqui está a lista com as matérias relacionadas ao Curso Técnico de Desenvolvimento de Sistemas:
        </p>
      </div>
      <div className="relative min-h-[30rem] w-full grow">
        <div className="absolute top-10 right-0 bottom-0 left-10 overflow-hidden rounded-tl-xl bg-gray-700 shadow-2xl bg-opacity-60">
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
    <div className="pointer-events-none absolute inset-0 ring-1 shadow-sm ring-black/5"></div>
  </div>
</div>


        <div
          className=" mt-10 grid   lg:grid-cols-2 lg:grid-rows-1 relative bg-cover bg-center "
          style={{ backgroundImage: "url('/img/facef.jpg')" }}
        >
          <div className="absolute inset-0  rounded-2xl"></div>

          <div className="relative max-lg:row-start-1">
            <div className="absolute inset-0  bg-gray-900 bg-opacity-60 "></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="px-8 py-6">
                <h2 className="text-2xl font-semibold text-white-700">
                  Centro Universitário Municipal de Franca
                </h2>
                <p className="mt-2 text-white leading-relaxed">
                  Sempre tive vontade de cursar Engenharia e quando passei no
                  vestibular da facef decidir cursar Engenharia de Software
                </p>
              </div>

              {/* Bloco do Ensino */}
              <div className="px-8 pt-5 sm:px-10 sm:pt-5">
                <p className="mt-2 text-2xl font-medium tracking-tight text-white max-lg:text-center">
                  Sobre o curso
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-white text-gray-200 max-lg:text-center pb-5">
                  Até o momento da minha jornada acadêmica, aprendi não apenas a
                  programar, mas também a projetar sistemas robustos, escaláveis
                  e eficientes com a Engenharia de Software. Tive contato com
                  disciplinas fundamentais como arquitetura de software, banco
                  de dados, inteligência artificial e desenvolvimento web, o que
                  me proporcionou uma base sólida para atuar no mercado de
                  tecnologia.
                  <br></br> <br></br>Além do conhecimento técnico, o curso me
                  ensinou a trabalhar em equipe, resolver problemas de forma
                  lógica e aprimorar minha capacidade de inovação. A cada
                  projeto, pude transformar ideias em soluções reais, o que
                  fortaleceu ainda mais minha paixão pela área.
                </p>
              </div>

              <div className="px-8 pt-5 sm:px-10 sm:pt-5">
                <p className="mt-2 text-2xl font-medium tracking-tight text-white max-lg:text-center">
                  Engenharia
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-white text-gray-200 max-lg:text-center pb-5">
                  Antes de escrever qualquer linha de código, é essencial
                  entender o problema e as necessidades dos usuários. Isso
                  envolve levantamento de requisitos, entrevistas com
                  stakeholders e definição de objetivos claros para o sistema.
                  <br></br>
                  <br></br>
                  Engenharia de Software vem para suprir a área da computação
                  que aplica princípios e boas práticas no desenvolvimento,
                  manutenção e gestão de software. Envolve desde a análise de
                  requisitos até a implementação, testes e otimização,
                  garantindo sistemas eficientes, escaláveis e confiáveis para
                  atender às necessidades dos usuários e empresas.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px  ring-1 shadow-sm ring-black/5"></div>
          </div>

          <div className="relative lg:row-span-1">
            <div className="absolute inset-0  bg-gray-900 bg-opacity-60 "></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="px-8 pt-5 pb-3 sm:px-10 sm:pt-5 sm:pb-0 text-white">
                <p className="mt-2 text-2xl font-medium tracking-tight text-white max-lg:text-center">
                  Oportunidades
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-200 max-lg:text-center">
                  O centro universitário oferece diversas oportunidades para
                  desenvolvimento acadêmico e profissional, proporcionando aos
                  alunos experiências enriquecedoras.
                </p>
                <p className="mt-2 text-2xl font-medium tracking-tight text-white max-lg:text-center">
                  Iniciação Científica
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-200 max-lg:text-center">
                  No segundo e terceiro semestre da graduação, fui contemplado
                  com uma bolsa do CNPq para participar de um projeto de
                  Iniciação Científica, onde aprofundei meus conhecimentos e
                  contribuí para pesquisas relevantes na minha área. Meu estudo
                  focou na Inteligência Artificial, explorando como modelos
                  avançados, como o ChatGPT, podem auxiliar na tomada de decisão
                  em diferentes contextos. Analisei seu impacto na otimização de
                  processos, suporte a usuários e automação de tarefas,
                  demonstrando sua aplicabilidade em diversas áreas da
                  tecnologia. Você pode acessar meu artigo clicando
                  <a
                    href="/certifications/others/relatorio.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-500"
                  >
                    {" "}
                    aqui
                  </a>
                  .
                </p>
              </div>

              <div className="px-8 pt-5 sm:px-10 sm:pt-5">
                <p className="mt-16 text-2xl font-medium tracking-tight text-white max-lg:text-center">
                  Minha matriz curricular
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-white text-gray-200 max-lg:text-center pb-5">
                  A graduação em Engenharia de Software, tem uma formação
                  abrangente que combinou teoria e prática para o
                  desenvolvimento de sistemas eficientes e escaláveis. Estudei e
                  ainda estudarei algoritmos, estrutura de dados, engenharia de
                  requisitos, desenvolvimento web e mobile, banco de dados,
                  arquitetura de software, metodologias ágeis, segurança da
                  informação e computação em nuvem. <br></br>
                  <br></br>
                  Além disso, conhecimentos em inteligência artificial, DevOps e
                  jogos digitais. A matriz curricular também incluiu projetos
                  práticos, pesquisa acadêmica e estágio, proporcionando
                  experiência real no desenvolvimento e gestão de software. Voce
                  pode ver melhor clicando
                  <a
                    href="https://www.unifacef.com.br/graduacao/cursos/engenharia-de-software/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-500"
                  >
                    {" "}
                    aqui
                  </a>
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
          </div>
        </div>

        
        <div className="w-1/2 flex items-center justify-center">
            <img
              src="/avatar/avatar.webp"
              alt="Your Name"
              className="max-w-full rounded-full"
            />
          </div>
      </div>
    </div>
  );
}
