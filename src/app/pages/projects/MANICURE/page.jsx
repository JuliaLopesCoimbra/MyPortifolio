// app/page.tsx ou pages/index.tsx, dependendo do seu projeto
"use client";
import Link from 'next/link';
import { useRouter } from "next/navigation"; // Para navegação no Next.js
export default function ManicureProject() {
    const router = useRouter();
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-white p-8" >
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

            <h1 className="text-4xl font-bold mb-4 text-center text-black z-10">💅 App de Agendamento de Manicure</h1>

            <p className="text-lg text-center mb-6 max-w-2xl text-black z-10">
   Desenvolvi um aplicativo em Flutter voltado para manicures e seus clientes. A plataforma permitia que clientes marcassem horários, escolhessem um profissional e realizassem agendamentos diretamente pelo app.

    Do outro lado, a manicure recebia as solicitações e podia confirmar, reagendar ou recusar os horários com apenas alguns toques na tela, tornando o gerenciamento da agenda muito mais eficiente.

    O sistema foi desenvolvido com foco na experiência do usuário, utilizando Firebase para autenticação, banco de dados em tempo real e notificações instantâneas, garantindo agilidade e confiabilidade em todo o fluxo de agendamento.

    Essa aplicação proporcionou autonomia para as profissionais e comodidade para os clientes, otimizando o dia a dia de ambos e mostrando, na prática, como a tecnologia pode transformar serviços locais em soluções inteligentes e acessíveis.
</p>



         

            <div className='z-10'>
                <Link href="https://www.linkedin.com/posts/j%C3%BAlia-lopes-coimbra-12648624a_flutter-firebase-mobileapp-activity-7326259038499831808-35Z9?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD2mgS4BRf3m3xosS8VNhs4dsdmk5Ia9BZw" target="_blank">
                    <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded">
                        Ver Publicação no LinkedIn
                    </button>
                </Link>
            </div>
        </div>
    );
}
