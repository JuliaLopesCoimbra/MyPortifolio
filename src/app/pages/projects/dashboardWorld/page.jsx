"use client";
import React, { useEffect, useState } from 'react';
import LineChartAQI from 'src/app/components/recharts/LineChartAQI';
const Example = () => {
  return (
    <div className='bg-white' style={{ border: "solid red 1px", height: "400px" }}>  // Defina uma altura suficiente
      <LineChartAQI />
    </div>
  );
};


export default Example;
