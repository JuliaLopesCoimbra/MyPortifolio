"use client";
export default function Dashboard() {
  return (
    <div className="bg-white">
      <div className="relative bg-white overflow-visible">
        <div className="pb-10  sm:pb-20 sm:pr-20 sm:pt-24 lg:pb-48 lg:pt-40">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">

              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Escolha um caminho para navegar
              </h1>

              <p className="mt-4 text-xl text-gray-500">
                Aqui você pode escolher por qual área deseja começar para me
                conhecer melhor
              </p>
            </div>
            <div>
              <div className="mt-10 ">
                <div
                  aria-hidden="true"
                  className="lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
               <div className="relative lg:absolute transform lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">

                    <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="flex flex-col items-center h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <a href="/pages/certifications">
                            <img
                              alt=""
                              src="././avatar/certificacoes.webp"
                              className="h-full w-full object-cover object-center hover:bg-purple-100"
                            />
                            <p className="text-black  text-center mt-2 hover:text-purple-500">Certificações</p>
                          </a>
                        </div>
                        <div className="flex flex-col items-center h-64 w-44 overflow-hidden rounded-lg">
                          <a href="/pages/education">
                            <img
                              alt=""
                              src="././avatar/educacao.webp"
                              className="h-full w-full object-cover object-center hover:bg-purple-100"
                            />
                            <p className="text-black text-center mt-2 hover:text-purple-500">Educação</p>
                          </a>
                        </div>
                      </div>

                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="flex flex-col items-center h-64 w-44 overflow-hidden rounded-lg">
                          <a href="/pages/projects">
                            <img
                              alt=""
                              src="././avatar/projetos.webp"
                              className="h-full w-full object-cover object-center hover:bg-purple-100"
                            />
                            <p className="text-black text-center mt-2 hover:text-purple-500">Projetos</p>
                          </a>
                        </div>
                      </div>

                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="flex flex-col items-center h-64 w-44 overflow-hidden rounded-lg">
                          <a href="/pages/professional">
                            <img
                              alt=""
                              src="././avatar/profissional.webp"
                              className="h-full w-full object-cover object-center hover:bg-purple-100"
                            />
                            <p className="text-black text-center mt-2 hover:text-purple-500">Profissional</p>
                          </a>
                        </div>
                        <div className="flex flex-col items-center h-64 w-44 overflow-hidden rounded-lg">
                          <a href="/pages/challenges">
                            <img
                              alt=""
                              src="././avatar/dificil.webp"
                              className="h-full w-full object-cover object-center hover:bg-purple-100"
                            />
                            <p className="text-black text-center mt-2 hover:text-purple-500">Desafios</p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
