// app/page.tsx ou pages/index.tsx, dependendo do seu projeto
"use client";
import Link from 'next/link';
import { useRouter } from "next/navigation"; // Para navegação no Next.js
export default function LollaProject() {
    const router = useRouter();
    return (
        <div className=" relative flex min-h-screen flex-col items-center justify-center bg-white p-8" style={{ backgroundImage: `url('/img/fundo/fundololla.png')`, backgroundSize: 'cover' }}>
           <div className="absolute inset-0 bg-black bg-opacity-50 z-5"></div>{" "}
            <div className="absolute top-10 left-0 p-4 z-10">
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
              
            <h1 className="text-4xl font-bold mb-4 text-center text-white z-10">🎉 Bradesco no Lollapalooza 2025 </h1>

            <p className="text-lg text-center mb-6 max-w-2xl  text-white z-10">
                Um dos projetos mais grandiosos que já desenvolvi foi para o estande da Bradesco no Lollapalooza 2025. Em meio a um dos maiores festivais de música do mundo, criamos uma experiência interativa completa que unia tecnologia, criatividade e engajamento com o público.

                No estande, os participantes faziam um cadastro rápido através de tablets ou celulares, registrando seus dados para participar da ativação. Em seguida, tiravam uma foto exclusiva, que era transformada por inteligência artificial em uma imagem personalizada com filtros artísticos que combinavam com o estilo do festival — uma verdadeira lembrança digital.

                Mas a experiência não parava por aí: ao final, os visitantes ainda podiam girar uma roleta interativa para concorrer a brindes exclusivos da marca.

                Tudo foi pensado para gerar impacto, fila e muito engajamento, com um sistema robusto por trás garantindo fluidez, segurança nos dados e integração com as ferramentas do evento. Foi um projeto que misturou emoção, tecnologia e música — e que com certeza marcou o festival.
            </p>


            <div className="w-full max-w-2xl mb-10 z-10">
                {/* Embed da publicação do LinkedIn */}
                <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7318316215096033282?collapsed=1"
                    height="600"
                    width="100%"
                    frameBorder="0"
                    allowFullScreen
                    title="Publicação Braskem Rock in Rio"
                ></iframe>
            </div>

            <Link className='z-10' href="https://www.linkedin.com/posts/j%C3%BAlia-lopes-coimbra-12648624a_lollapalooza2025-bradesco-inovaaexaeto-activity-7318316310226964480-VapJ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD2mgS4BRf3m3xosS8VNhs4dsdmk5Ia9BZw" target="_blank">
                <button className="z-10 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded">
                    Ver Publicação no LinkedIn
                </button>
            </Link>
        </div>
    );
}
