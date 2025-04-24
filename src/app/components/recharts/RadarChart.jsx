"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer
} from "recharts";

const RadarChartAQI = ({ city }) => {
  const [pollutionData, setPollutionData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const token = "e3cd9fb1d143eee80c4fef1af9d9846ebdd63dce";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.waqi.info/feed/${city}/?token=${token}`);
        const iaqi = response.data.data.iaqi;

        const formattedData = [
          { pollutant: "PM2.5", value: iaqi.pm25?.v || 0 },
          { pollutant: "PM10", value: iaqi.pm10?.v || 0 },
          { pollutant: "NO₂", value: iaqi.no2?.v || 0 },
          { pollutant: "SO₂", value: iaqi.so2?.v || 0 },
          { pollutant: "CO", value: iaqi.co?.v || 0 },
          { pollutant: "O₃", value: iaqi.o3?.v || 0 },
        ];

        setPollutionData(formattedData);
      } catch (err) {
        setError("Erro ao buscar dados");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [city]);

  if (loading) return <div>Carregando {city}...</div>;
  if (error) return <div >{city}: {error}</div>;

  return (
    <div className="p-2 border rounded shadow bg-white">
      <h4 className="text-center font-bold mb-2">{city}</h4>
      <ResponsiveContainer width="100%" height={250}>
        <RadarChart data={pollutionData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="pollutant" />
          <PolarRadiusAxis />
          <Radar name="Poluentes" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RadarChartAQI;
