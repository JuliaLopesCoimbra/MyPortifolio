"use client";
import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";

// Corrige ícone padrão do Leaflet no Next.js
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
});

const token = "e3cd9fb1d143eee80c4fef1af9d9846ebdd63dce"; // 👈 coloque sua token

const cities = [
  { name: "Tokyo", coords: [35.6895, 139.6917] },
  { name: "Delhi", coords: [28.6139, 77.2090] },
  { name: "Shanghai", coords: [31.2304, 121.4737] },
  { name: "Sao Paulo", coords: [-23.5505, -46.6333] },
  { name: "Mexico City", coords: [19.4326, -99.1332] },
  { name: "Cairo", coords: [30.0444, 31.2357] },
  { name: "Mumbai", coords: [19.0760, 72.8777] },
  { name: "Beijing", coords: [39.9042, 116.4074] },
  { name: "Dhaka", coords: [23.8103, 90.4125] },
  { name: "Osaka", coords: [34.6937, 135.5023] },
];

function getAQILevelInfo(aqi) {
  if (aqi <= 50) return { label: "Boa", color: "green", advice: "Seguro para todas as atividades." };
  if (aqi <= 100) return { label: "Moderada", color: "yellow", advice: "Pessoas sensíveis devem evitar exposição prolongada." };
  if (aqi <= 150) return { label: "Ruim para sensíveis", color: "orange", advice: "Evite esforços físicos intensos." };
  if (aqi <= 200) return { label: "Ruim", color: "red", advice: "Evite atividades ao ar livre." };
  if (aqi <= 300) return { label: "Muito ruim", color: "purple", advice: "Fique em ambientes fechados." };
  return { label: "Perigosa", color: "maroon", advice: "Evite qualquer exposição ao ar livre." };
}

export default function AQIMap() {
  const [cityData, setCityData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const results = await Promise.all(
        cities.map(async (city) => {
          try {
            const res = await axios.get(`https://api.waqi.info/feed/${city.name}/?token=${token}`);
            const aqi = res.data.data.aqi ?? 0;
            const { label, color, advice } = getAQILevelInfo(aqi);
            return { ...city, aqi, label, color, advice };
          } catch {
            return { ...city, aqi: 0, label: "Erro", color: "gray", advice: "Dados não disponíveis" };
          }
        })
      );
      setCityData(results);
    }

    fetchData();
  }, []);

  return (
    <div className="h-[600px] w-full mt-10 rounded-xl overflow-hidden">
      <MapContainer center={[20, 0]} zoom={2} scrollWheelZoom={false} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {cityData.map((city) => (
          <Marker key={city.name} position={city.coords}>
            <Popup>
              <h3 className="font-bold text-lg">{city.name}</h3>
              <p><strong>AQI:</strong> {city.aqi} – <span style={{ color: city.color }}>{city.label}</span></p>
              <p>{city.advice}</p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
