"use client";
import React, { useEffect, useState } from 'react';
import axios from "axios";
import dynamic from 'next/dynamic';
const LineChartAQI = dynamic(() => import('src/app/components/recharts/LineChartAQI'), { ssr: false });
const RadarChartAQI = dynamic(() => import('../../../components/recharts/RadarChart'), { ssr: false });
const BarChartAQI = dynamic(() => import('src/app/components/recharts/BarChart'), { ssr: false });
const CityAlertCard = dynamic(() => import('src/app/components/recharts/CityAlertCard'), { ssr: false });
const AQIMap = dynamic(() => import('src/app/components/AQIMap'), { ssr: false });

import { useRouter } from "next/navigation"; // Para navegação no Next.js

const cities = ['Tokyo', 'Delhi', 'Shanghai', 'Sao Paulo', 'Mexico City', 'Cairo', 'Mumbai', 'Beijing', 'Dhaka', 'Osaka'];
const Example = () => {
  const router = useRouter();
  const token = "e3cd9fb1d143eee80c4fef1af9d9846ebdd63dce";
  const [cityData, setCityData] = useState([]);
  useEffect(() => {
    async function fetchAQIData() {
      const results = await Promise.all(
        cities.map(async (city) => {
          try {
            const res = await axios.get(`https://api.waqi.info/feed/${city}/?token=${token}`);
            const aqi = res.data.data.aqi ?? 0;
            return { city, aqi };
          } catch (err) {
            console.error(`Erro em ${city}`, err);
            return { city, aqi: 0 };
          }
        })
      );
      setCityData(results);
    }

    fetchAQIData();
  }, []);

  return (
    <div className="w-full   bg-white" >

      <div className="absolute top-10 left-10 p-4 z-10">
        <button
          onClick={() => router.back()}
          className="text-white hover:text-blue-900"
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

      <div className="mb-6 text-center">

        <div className="relative w-full px-4 py-8 overflow-hidden">
          {/* Imagem de fundo com opacidade isolada */}
          <div
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat backdrop-blur-sm"
            style={{
              backgroundImage: `url('/img/projects/DASHBOARD_WORLD.jpg')`,
            }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 z-5"></div>{" "}
          {/* Conteúdo por cima */}
          <div className="relative z-10 p-6">
            <h1 className="text-4xl font-bold mb-2 text-white">DASHBOARD - Air Quality Programmatic</h1>
            <h2 className="text-2xl font-semibold mb-2 text-white">Saiba como está a atmosfera no mundo</h2>
            <h3 className="text-xl font-medium mb-4 text-white">Índice de Qualidade do Ar (AQI)</h3>
            <h4 className="text-lg font-semibold mb-2 text-white">🧪 Como o AQI é calculado?</h4>
            <p className="text-sm text-white mb-2">
              O índice leva em conta a concentração de poluentes como:
            </p>
            <ul className="list-disc list-inside text-sm text-white space-y-1">
              <li><strong>PM2.5</strong> – Partículas finas, mais perigosas</li>
              <li><strong>PM10</strong> – Partículas maiores</li>
              <li><strong>NO₂</strong> – Dióxido de nitrogênio</li>
              <li><strong>O₃</strong> – Ozônio</li>
              <li><strong>SO₂</strong> – Dióxido de enxofre</li>
              <li><strong>CO</strong> – Monóxido de carbono</li>
            </ul>
          </div>
        </div>




        <div className="grid grid-cols-1 md:grid-cols-5 gap-1  pl-4 mt-10" >
          <div className="md:col-span-4"
          // style={{ border: '1px red solid' }}
          >

            <LineChartAQI />

          </div>
          <div className="md:col-span-1"
          // style={{ border: '1px red solid' }}
          >

            <div className="bg-white rounded-lg p-4 text-sm text-gray-800  mt-4">
              <h4 className="text-base font-semibold mb-2 text-black">🌫️ Legenda do AQI</h4>
              <ul className="space-y-1">
                <li><span className="font-bold text-green-600">0–50</span> – Boa: Qualidade do ar satisfatória.</li>
                <li><span className="font-bold text-yellow-500">51–100</span> – Moderada: Aceitável, mas pode afetar pessoas sensíveis.</li>
                <li><span className="font-bold text-orange-500">101–150</span> – Ruim para sensíveis: Crianças e idosos devem evitar esforço.</li>
                <li><span className="font-bold text-red-500">151–200</span> – Ruim: Todos podem sentir efeitos adversos.</li>
                <li><span className="font-bold text-purple-600">201–300</span> – Muito ruim: Efeitos sérios à saúde.</li>
                <li><span className="font-bold text-rose-950">301+</span> – Perigosa: Evite qualquer exposição ao ar livre.</li>
              </ul>
            </div>


          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-1  pl-4 "
        // style={{ border: '1px red solid' }}
        >

          <div className="m-10 ">
            <h3 className="text-2xl font-bold text-center text-black mb-4 "></h3>
            <p className="text-sm text-gray-700 mb-2 ">
              Nivél de cada um dos poluentes em cada cidade:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {cities.map((city) => (
                <RadarChartAQI key={city} city={city} />
              ))}
            </div>
            <BarChartAQI />
            <h3 className="text-xl font-bold text-black text-center my-4 mt-20">🌍 Alertas por Cidade</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
              {cityData.map((item) => (
                <CityAlertCard key={item.city} city={item.city} aqi={item.aqi} />
              ))}
            </div>
            <AQIMap />



          </div>
        </div>
      </div>
    </div>
  );
};

export default Example;
