// app/page.tsx ou pages/index.tsx, dependendo do seu projeto
"use client";
import Link from 'next/link';
import { useRouter } from "next/navigation"; // Para navegação no Next.js
export default function DisneyProject() {
     const router = useRouter();
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white p-8"   style={{ backgroundImage: `url('/img/fundo/fundodisney.png')`, backgroundSize: 'cover' }}>
         <div className="absolute top-10 left-10 p-4 z-10">
        <button
          onClick={() => router.back()}
          className="text-white hover:text-purple-500"
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
      <h1 className="text-4xl font-bold mb-4 text-center ">✈️ Projeto LATAM na D23 Disney – São Paulo</h1>

      <p className="text-lg text-center mb-6 max-w-2xl ">
      Um dos sistemas mais incríveis que já desenvolvi foi para o estande da LATAM, dentro do evento D23 da Disney, em São Paulo.

A proposta era transformar o estande da LATAM em uma experiência interativa, simulando um mini voo. Para participar, os visitantes precisavam reservar suas cadeiras assim que chegavam no estande — e foi aí que meu sistema entrou em ação.

Criei uma solução dinâmica e intuitiva, que permitia ao público realizar reservas em tempo real, garantindo organização e fluidez na experiência. O sistema reconhecia os participantes, gerenciava os horários disponíveis e controlava o fluxo de entrada para a dinâmica.

Ver a interação acontecendo ao vivo, com tecnologia conectando pessoas a uma experiência mágica, foi simplesmente inesquecível.
      </p>

     
      <div className="w-full max-w-2xl mb-10">
        {/* Embed da publicação do LinkedIn */}
        <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7261882602611990528?collapsed=1"
          height="600"
          width="100%"
          frameBorder="0"
          allowFullScreen
          title="Publicação Braskem Rock in Rio"
        ></iframe>
      </div>

      <Link href="https://www.linkedin.com/posts/j%C3%BAlia-lopes-coimbra-12648624a_frontend-webdevelopment-reactjs-activity-7261882776075784192-4ryp?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD2mgS4BRf3m3xosS8VNhs4dsdmk5Ia9BZw" target="_blank">
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded">
          Ver Publicação no LinkedIn
        </button>
      </Link>
    </div>
  );
}
