"use client";
import React from "react";



function getAQIInfo(aqi) {
  if (aqi <= 50) return { level: "Boa", color: "text-green-600", icon: "✅", message: "Seguro para todas as atividades ao ar livre." };
  if (aqi <= 100) return { level: "Moderada", color: "text-yellow-500", icon: "⚠️", message: "Pessoas sensíveis devem evitar exposição prolongada." };
  if (aqi <= 150) return { level: "Ruim para sensíveis", color: "text-orange-500", icon: "🚷", message: "Evite esforços físicos intensos ao ar livre." };
  if (aqi <= 200) return { level: "Ruim", color: "text-red-500", icon: "❌", message: "Evite atividades ao ar livre." };
  if (aqi <= 300) return { level: "Muito ruim", color: "text-purple-600", icon: "🏠", message: "Fique em ambientes fechados e bem ventilados." };
  return { level: "Perigosa", color: "text-rose-900", icon: "☠️", message: "Evite completamente a exposição ao ar livre." };
}

export default function CityAlertCard({ city, aqi }) {
  const { level, color, icon, message } = getAQIInfo(aqi);

  return (
    <div className="border p-4 rounded-md shadow-md bg-white text-sm max-w-xs w-full">
      <h4 className="text-lg font-semibold text-black mb-2">
        {icon} {city}
      </h4>
      <p className={`font-bold ${color}`}>AQI: {aqi} – {level}</p>
      <p className="text-gray-700 mt-1">{message}</p>
    </div>
  );
}
