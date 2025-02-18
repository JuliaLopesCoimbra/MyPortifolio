export default function Home() {
    return (
        <div className="relative w-full h-full">
            <video autoPlay muted loop className="absolute w-full h-full object-cover z-0">
                <source src="/video-flor.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="flex justify-center items-center h-screen relative z-10">
                <div className="w-1/2 flex items-center justify-center">
                    <img src="/avatar.webp" alt="Your Name" className="max-w-full rounded-full" />
                </div>
                <div className="w-1/2 text-center text-white bg-black bg-opacity-50 p-1 rounded m-10">
                    <p className="text-5xl ">
                        Bem-vindo ao meu site
                    </p>
                    <p>
                        Aqui você encontra informações sobre mim e meus projetos
                    </p>
                </div>
            </div>
        </div>
    );
}
