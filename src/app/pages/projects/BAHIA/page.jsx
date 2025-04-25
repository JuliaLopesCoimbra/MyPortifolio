// app/page.tsx ou pages/index.tsx, dependendo do seu projeto
"use client";
import Link from 'next/link';
import { useRouter } from "next/navigation"; // Para navegação no Next.js
export default function BHProject() {
    const router = useRouter();
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-white p-8" >
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
            <div className="absolute top-10 left-10 p-4 z-10">
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
            <h1 className="text-4xl font-bold mb-4 text-center text-black z-10">🏝️ Bradesco Seguros — Evento Corporativo </h1>

            <p className="text-lg text-center mb-6 max-w-2xl  text-black z-10">
                Em um dos projetos mais especiais que participei, estive presente durante 15 dias no evento da Bradesco Seguros, realizado no Resort Transamérica na paradisíaca Ilha de Comandatuba.
                Foi uma oportunidade única de atuar em um ambiente de alto nível, lado a lado com grandes profissionais, unindo tecnologia, atendimento e gestão de eventos corporativos. Além da imersão total no projeto, essa experiência reforçou ainda mais minha capacidade de adaptação, solução de problemas e trabalho em equipe em eventos de grande porte.
            </p>
            <div className='z-10'>
                <Link href="https://www.linkedin.com/posts/j%C3%BAlia-lopes-coimbra-12648624a_bradescoseguros-networking-eventoscorporativos-activity-7320818665208107008-RjEY?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD2mgS4BRf3m3xosS8VNhs4dsdmk5Ia9BZw" target="_blank">
                    <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded">
                        Ver Publicação no LinkedIn
                    </button>
                </Link>
            </div>
        </div>
    );
}
