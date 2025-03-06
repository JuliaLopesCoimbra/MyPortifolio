export function About() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h1 className="mt-0 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Sobre mim</h1>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src='/img/eu.png'
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
                Meu nome é Júlia, tenho 20 anos e estou cursando Engenharia de Software. Desde pequena, sempre fui fascinada por tecnologia e tudo relacionado a ela. Meu sonho sempre foi cursar Engenharia e atuar nessa profissão, e estou feliz em dizer que estou no caminho certo para realizá-lo.
              </p>
              <p>
                Minha paixão pela tecnologia começou cedo, assim como meu dom pela matemática, que sempre foi minha matéria favorita na escola. Com essa paixão em mente, estudei muito para entrar na Etec Julio Cardoso, onde consegui uma vaga no ensino médio técnico integrado com Desenvolvimento de Sistemas. Foi lá que tive meu primeiro contato com a programação, e desde então soube que Engenharia de Software era a carreira que eu queria seguir.
              </p>
              <p>
                Finalizo a minha graduação no final de 2026 e confesso que estou estou tento oportunidades que sempre sonhei. Cada dia de aprendizado me aproxima mais do meu objetivo de me tornar uma engenheira de software e fazer a diferença no mundo da tecnologia.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Um pouco da minha vida pessoal.</h2>
              <p className="mt-6">
                Fora das salas de aula e do mundo da programação, tenho uma vida pessoal recheada de atividades que me energizam e me inspiram. Sou uma entusiasta dos esportes, e a corrida ocupa um lugar especial em meu coração. Participei de uma meia maratona, completando os desafiadores 21 km, uma experiência que testou meus limites e reforçou minha resiliência.
              </p>
              <br></br>
              <p>
                Além da corrida, jogo vôlei regularmente e mantenho uma rotina de musculação há três anos, o que me ajuda a manter o foco e a disciplina—qualidades essenciais tanto nos esportes quanto na engenharia de software. Nos momentos de lazer, você provavelmente me encontrará com um controle de videogame na mão, explorando novos mundos virtuais ou relaxando com uma boa playlist de músicas e podcasts.
              </p>
              <br>
              </br>
              <p>
                A leitura é outra paixão que cultivo; livros de literatura têm um lugar especial em minha estante e em meu coração. Eles me proporcionam uma janela para outras culturas e épocas, enriquecendo minha compreensão do mundo. Além disso, continuo a nutrir meu amor pelo conhecimento estudando diversas matérias escolares, pois acredito que a educação é uma jornada contínua que sempre nos leva a novos e empolgantes destinos.
              </p>
              {/* <p className="mt-6">
                Quando entrei na minha graduação, tive uma matéria chamada Metodologia de Pesquisa Científica, ministrada pelo professor Silvio. Ele me despertou a vontade de fazer uma iniciação científica, pois sempre priorizei estudar e dar o meu melhor para adquirir conhecimento. Desde então, consegui passar por todas as etapas para realizar a minha pesquisa. Se este site está no ar, então significa que consegui completar um dos meus sonhos.
                </p>
                <br></br>
                <p>
                Todas as etapas da minha iniciação científica você pode encontrar na página "Pesquisa" neste site. Mas, falando ainda sobre mim, não foi algo fácil realizar essa pesquisa. Tudo era novo para mim, tanto o tema da pesquisa quanto a estrutura acadêmica que foi seguida. Contudo, com muito esforço e determinação, consegui completar todas as etapas e oferecer o melhor de mim em tudo o que fiz.
                </p>
                <br>
                </br>
                <p>
                Agora que minha pesquisa está finalizada, meu objetivo é entrar no mercado de trabalho em uma vaga onde eu possa aplicar meu conhecimento e crescer profissionalmente.
                </p> */}
              <br></br>
              <p>Você pode visitar meu <a className='font-bold' href='https://www.linkedin.com/in/júlia-lopes-12648624a/'>LinkedIn</a> ou meu <a className='font-bold' href='https://github.com/JuliaLopesCoimbra'>GitHub</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}