// app/page.tsx ou pages/index.tsx, dependendo do seu projeto
"use client";
import Link from 'next/link';
import { useRouter } from "next/navigation"; // Para navegação no Next.js
export default function ICProject() {
    const router = useRouter();
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-white p-8" >
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

            <h1 className="text-4xl font-bold mb-4 text-center text-black z-10">📚 Iniciação Científica</h1>

            <p className="text-lg text-center mb-6 max-w-2xl  text-black z-10">
                Entre 2023 e 2024, desenvolvi uma iniciação científica focada em investigar como o ChatGPT e modelos de linguagem similares podem auxiliar no processo de tomada de decisão.

                O projeto analisou o impacto da inteligência artificial em diferentes contextos — acadêmicos, corporativos e pessoais —, avaliando como a tecnologia pode oferecer suporte, otimizar escolhas e influenciar os resultados. Também explorei os limites éticos e a responsabilidade no uso dessas ferramentas.

                Além da pesquisa teórica, realizamos estudos de caso e testes práticos que mostraram o potencial do ChatGPT para aprimorar a análise de informações, acelerar processos e democratizar o acesso a insights estratégicos.

                Essa experiência aprofundou ainda mais minha compreensão sobre IA e suas aplicações no mundo real, consolidando uma visão crítica e inovadora sobre o futuro da tecnologia na sociedade.
            </p>


            <div className="w-full max-w-2xl mb-10 z-10">
                {/* Embed da publicação do LinkedIn */}
                <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7259352492583358464?collapsed=1"
                    height="600"
                    width="100%"
                    frameBorder="0"
                    allowFullScreen
                    title="Publicação Braskem Rock in Rio"
                ></iframe>
            </div>

            <div className='z-10'>
                <Link href="https://www.linkedin.com/posts/j%C3%BAlia-lopes-coimbra-12648624a_pesquisacientifica-academia-cnpq-activity-7259352607662489600-PRv_?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD2mgS4BRf3m3xosS8VNhs4dsdmk5Ia9BZw" target="_blank">
                    <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded">
                        Ver Publicação no LinkedIn
                    </button>
                </Link>
            </div>
        </div>
    );
}
