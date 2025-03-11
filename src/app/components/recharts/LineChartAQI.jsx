"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const LineChartAQI = () => {
  const [airQualityData, setAirQualityData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = "e3cd9fb1d143eee80c4fef1af9d9846ebdd63dce";  // Substitua por seu token real

  useEffect(() => {
    const cities = ['Tokyo', 'Delhi', 'Shanghai', 'Sao Paulo', 'Mexico City', 'Cairo', 'Mumbai', 'Beijing', 'Dhaka', 'Osaka'];
    const fetchData = async () => {
      try {
        const responses = await Promise.all(
          cities.map(city =>
            axios.get(`https://api.waqi.info/feed/${city}/?token=${token}`)
          )
        );
        const data = responses.map((response, index) => ({
          name: cities[index],
          aqi: response.data.data.aqi  // Obtem o índice de qualidade do ar de cada cidade
        }));
        console.log("a",data)
        setAirQualityData(data);
        
      } catch (error) {
        setError(error.message);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  console.log(airQualityData)
  return (
    <ResponsiveContainer width="100%" height="300px">
      <LineChart
        width={500}
        height={300}
        data={airQualityData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="aqi" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartAQI;
