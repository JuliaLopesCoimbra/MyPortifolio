import React from "react";

export default function Contact() {
  return (
    <div className="bg-white relative">
      {/* Camada do SVG de fundo */}
      <div className="absolute inset-0 z-[10] overflow-hidden h-full w-full">
        <svg
          className="absolute left-[50%] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200"
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

      {/* Conteúdo principal */}
      <div className="relative overflow-hidden bg-white ">
        <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="relative w-80 h-160 bg-black rounded-3xl border-8 border-gray-900 shadow-lg overflow-hidden flex items-center justify-center z-[10]" >
              <img
                src="/img/euFacef.jpeg"
                alt="Your Name"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-4 bg-gray-900 rounded-b-lg"></div>
            </div>

            <div className=" relative ml-10 max-w-lg z-[10]">
              <a href="/">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Entre em contato
                </h1>
              </a>
              <p className="mt-4 text-xl text-gray-500">
                Aqui você pode escolher por qual área deseja começar para me conhecer
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
