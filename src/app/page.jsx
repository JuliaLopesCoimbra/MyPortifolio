"use client";
import { useState, useEffect } from "react";
//pages
import Header from "./pages/Header";
import {About}  from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Contact from "./pages/Contact";
import Stack from "./pages/Stack";
export default function Home() {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    // const handleScroll = () => {
    //     if (window.scrollY > 50) { // Mostra o header após 100px de rolagem
    setShowHeader(true);
    // } else {
    //     setShowHeader(false);
    // }
    // };
    // window.addEventListener("scroll", handleScroll);
    // return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full h-full">
      <Header showHeader={showHeader} />
      <section className="relative w-full h-screen">
        <video
          autoPlay
          muted
          loop
          className="absolute w-full h-full object-cover z-0"
        >
          <source src="/video/video-flor.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50 z-5"></div>{" "}
        <div className="flex justify-center items-center h-screen relative z-10">
          <div className="w-1/2 flex items-center justify-center">
            <img
              src="/avatar/avatar.webp"
              alt="Your Name"
              className="max-w-full rounded-full"
            />
          </div>
          <div className="w-1/2 text-center text-white p-1 rounded m-10">
            <p className="text-5xl font-bold drop-shadow-lg">
              Bem-vindo ao meu portfólio
            </p>
           
            <p className="drop-shadow-lg">
            Julia Lopes Coimbra | Desenvolvedora Full Stack
            </p>
          </div>
        </div>
      </section>
      <section id="about">
       <About />
      </section>
      <section >
        <Dashboard />
      </section>
      <section className="w-full h-screen pl-10 pr-10 pb-10 bg-white">
        <Stack />
      </section>
      <section id="contact" className="pt-10 bg-white">
        <Contact />
      </section>
    </div>
  );
}
