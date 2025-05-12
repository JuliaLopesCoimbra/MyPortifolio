// app/page.tsx ou pages/index.tsx, dependendo do seu projeto
"use client";

import Link from 'next/link';
import { useRouter } from "next/navigation"; // Para navegação no Next.js
export default function BraskemRockInRioProject() {
     const router = useRouter();
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white p-8">
         <div className="fixed inset-0 z-0 overflow-hidden h-full w-full">

<svg
  className="absolute left-[50%] top-0 h-[254rem] w-[128rem] -translate-x-1/2 stroke-gray-200"
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
         <div className="absolute top-10 left-0 p-4 z-10">
        <button
          onClick={() => router.back()}
          className="text-black hover:text-purple-500"
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
      <h1 className="text-4xl font-bold mb-4 text-center text-black z-10">Projeto Rock in Rio 2024 - Braskem</h1>

      <p className="text-lg text-center mb-6 max-w-2xl text-black z-10">
        Nesse projeto desenvolvi um software de controle de brindes para o estande da Braskem no Rock in Rio 2024. 
        Um sistema eficiente, seguro e rápido para garantir a melhor experiência para o público, através da gestão 
        em tempo real dos brindes disponíveis e distribuídos.
      </p>

      
      <div className="w-full max-w-2xl mb-10 z-10">
        {/* Embed da publicação do LinkedIn */}
        <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7252283884116041729?collapsed=1" 
          height="600"
          width="100%"
          frameBorder="0"
          allowFullScreen
          title="Publicação Braskem Rock in Rio"
        ></iframe>
      </div>

    <div className='z-10'>
    <Link href="https://www.linkedin.com/posts/j%C3%BAlia-lopes-coimbra-12648624a_frontend-webdevelopment-rockinrio2024-activity-7252284024818155520-W50w?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD2mgS4BRf3m3xosS8VNhs4dsdmk5Ia9BZw" target="_blank">
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded">
          Ver Publicação no LinkedIn
        </button>
      </Link>
    </div>
    </div>
  );
}
