"use client";
import React, { useEffect, useState } from "react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from "recharts";

const cities = [
  "Tokyo", "Delhi", "Shanghai", "Sao Paulo", "Mexico City",
  "Cairo", "Mumbai", "Beijing", "Dhaka", "Osaka"
];

const API_TOKEN = "e3cd9fb1d143eee80c4fef1af9d9846ebdd63dce"; // 👈 Insira sua token aqui

export default function BarChartPollutants() {
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCityData(city) {
      const res = await fetch(`https://api.waqi.info/feed/${city}/?token=${API_TOKEN}`);
      const json = await res.json();
      if (json.status === "ok") {
        const iaqi = json.data.iaqi;
        return {
          city,
          PM25: iaqi.pm25?.v ?? 0,
          PM10: iaqi.pm10?.v ?? 0,
          NO2: iaqi.no2?.v ?? 0,
          O3: iaqi.o3?.v ?? 0,
          SO2: iaqi.so2?.v ?? 0,
          CO: iaqi.co?.v ?? 0
        };
      }
      return { city, PM25: 0, PM10: 0, NO2: 0, O3: 0, SO2: 0, CO: 0 };
    }

    async function fetchAllCities() {
      const promises = cities.map(fetchCityData);
      const results = await Promise.all(promises);
      setChartData(results);
      setLoading(false);
    }

    fetchAllCities();
  }, []);

  if (loading) return <p className="text-center text-gray-600">Carregando dados de poluentes...</p>;

  return (
    <div className="w-full h-[500px] mt-10">
      <h3 className="text-xl font-bold mb-4 text-black text-center">
        📊 Comparativo de Poluentes por Cidade
      </h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="city" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="PM25" name="PM2.5" fill="#8884d8" />
          <Bar dataKey="PM10" name="PM10" fill="#82ca9d" />
          <Bar dataKey="NO2" name="NO₂" fill="#ffc658" />
          <Bar dataKey="O3" name="O₃" fill="#ff8042" />
          <Bar dataKey="SO2" name="SO₂" fill="#d0ed57" />
          <Bar dataKey="CO" name="CO" fill="#a4de6c" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
